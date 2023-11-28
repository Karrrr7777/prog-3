var socket = io()

side = 40

let xotiGuyn = "green";
let grEaterguyn = "yellow"
let predatorGuyn = "red"
let magicianGuyn = "white"


function setup() {
        createCanvas(20 * side, 20 * side);
        background("gray")
}

function display(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill(xotiGuyn)
                        } else if (matrix[y][x] == 2) {
                                fill(grEaterguyn)
                        } else if (matrix[y][x] == 3) {
                                fill(predatorGuyn)

                        }

                        else if (matrix[y][x] == 4) {
                                fill(magicianGuyn)
                        }
                        else if (matrix[y][x] == 5) {
                                fill("cyan")
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


}

setInterval(
        function () {
                socket.on('send matrix', display)
        }, 1000
)





var but = document.getElementById("Ashun");
but.addEventListener("click",handleAshunClick )


function handleAshunClick(evt) {
        xotiGuyn = "orange"
        grEaterguyn = "blue"


}


var but = document.getElementById("Garun");
but.addEventListener("click",handleGarunClick )


function handleGarunClick(evt) {
        xotiGuyn = "green"
        predatorGuyn = "darkgreen"
        grEaterguyn = "yellow"
        
        socket.emit("Garun")
}

var but = document.getElementById("Dzmer");
but.addEventListener("click",handleDzmerClick )


function handleDzmerClick(evt) {
        xotiGuyn = "white"
        magicianGuyn = "darkblue"
        predatorGuyn = "red"
        grEaterguyn = "yellow"


        socket.emit("Dzmer")
}

var but = document.getElementById("Amar");
but.addEventListener("click",handleAmarClick )


function handleAmarClick(evt) {
        xotiGuyn = "red"
        magicianGuyn = "darkblue"
        predatorGuyn = "darkgreen"
        grEaterguyn = "yellow"

        socket.emit("Amar")
}


var but = document.getElementById("Event")
but.addEventListener("click", handleEventClick)

function handleEventClick(evt){

        socket.emit("Event")



}















