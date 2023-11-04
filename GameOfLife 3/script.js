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
let side = 40;
let grassArray = [];
// GrassEater
let grassEaterArr = [];
let predatorArr = [];
let magicianArr = []
let waterArr = []
let flowerArr = []

function setup() {
        frameRate(5);

        createCanvas(matrix[0].length * side, matrix.length * side);
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

        }
}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill('yellow')
                        } else if (matrix[y][x] == 3) {
                                fill("red")

                        }

                        else if (matrix[y][x] == 4) {
                                fill("white")
                        }
                        else if (matrix[y][x] == 5) {
                                fill("aqua")
                        }

                        else if (matrix[y][x] == 6) {
                                fill("lightblue")
                        }

                        else if (matrix[y][x] == 7) {
                                fill("Magenta")
                        } else if (matrix[y][x] == 8) {
                                fill("black")
                        }

                        else {
                                fill("gray")
                        }



                        rect(x * side, y * side, side, side)
                }
        }

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



}


let student = {
   name: "Karlen",
   lastname:"Papoyan",     
   age: "18",
   

   showInfo(){
           
        console.log(this.name + " " + this.lastname + " " + this.age);
   }


}


student.showInfo();


  











