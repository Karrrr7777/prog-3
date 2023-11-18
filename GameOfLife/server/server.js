var express = require('express');   
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(
    matrixSize,
    grassCount,
    grassEaterCount,
    predatorCount,
    magicianCount,
    waterCount,
    flowerCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([]);
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0);
            }
    }

    for (let i = 0; i < grassCount; i++) {

            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 1
    }


    for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 2
    }

    for (let i = 0; i < predatorCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 3

    }


    for (let i = 0; i < magicianCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 4


    }

    for (let i = 0; i < waterCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 5


    }
    for (let i = 0; i < flowerCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 7


    }

    for (let i = 0; i < 0; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 8


    }


    for (let i in matrix) {
            for (j in matrix) {
                    if (i == j) {
                            matrix[i][j] = 6
                    }
            }

    }

    return matrix;



}
let matrix = matrixGenerator(20, 30, 15, 7, 5, 5, 6);
io.sockets.emit('send matrix', matrix)

side = 40
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let magicianArr = []
let waterArr = []
let flowerArr = []

let Grass = require("./grass")
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let Magician = require("./magician")
let Water = require("./water")
let Flower = require("./flower")


for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y)
                    grassArray.push(gr);
            }
            //GrassEate
            else if (matrix[y][x] == 2) {
                    let gre = new GrassEater(x, y)
                    grassEaterArr.push(gre);
            }

            else if (matrix[y][x] == 3) {
                    let pred = new Predator(x, y)
                    predatorArr.push(pred)

            }

            else if (matrix[y][x] == 4) {
                    let magic = new Magician(x, y)
                    magicianArr.push(magic)
            }

            else if (matrix[y][x] == 5) {
                    let wat = new Water(x, y)
                    waterArr.push(wat)
            }


            else if (matrix[y][x] == 7) {
                    let flw = new Flower(x, y)
                    flowerArr.push(flw)

            }
    }

    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (var i in grassArray) {
        grassArray[i].mul();

}

// grassEater
for (let index = 0; index < grassEaterArr.length; index++) {
        grassEaterArr[index].eat();


}

for (let i in predatorArr) {
        predatorArr[i].eat()
}

for (let i in magicianArr) {
        magicianArr[i].eat()
}

if (predatorArr.length <= 0 && grassEaterArr.length <= 0 && grassArray.length <= 0) {
        let gr = new Grass(0, 0);
        grassArray.push(gr);
        for (let i in grassArray) {
                grassArray[i].mul();

        }
}


for (let i in magicianArr) {
        if (grassArray.length >= 280) {
                magicianArr[i].die()
                console.log(matrix);
        }
}



for (var i in waterArr) {

        if (grassArray.length >= 270) {
                waterArr[i].mul();

        }


}


for (var i in flowerArr) {


        if (grassArray.length >= 300) {
                flowerArr[i].move()
                flowerArr[i].mul()


        }


}
io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function () {
    createObject(matrix)
})
