var socket = io()

side = 40 

function setup(){
        createCanvas(20 * side, 20 * side);
        background("#acacac")
}

function display(matrix) {
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

        
}

setInterval(
        function () {
        socket.on('send matrix', display)
        },1000
    )


// let myEvent = new Event("customEvent", { cancelable: true , bubbles: true})
// let button = document.querySelector("Button")

// button.addEventListener("customEvent", e => {
//         console.log("Button", e.defaultPrevanted);

// })

// document.addEventListener("customEvent", e => {
//         console.log("Document", e.defaultPrevanted);

// button.dispatchEvent(myEvent)


// })
