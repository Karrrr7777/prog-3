let LivingCreature = require("./livingCreature");

module.exports = class Flower extends LivingCreature {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.direction = []

    }


    move() {
        let emptyCells = this.chooseCell(1)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[this.y][this.x] = 8

            matrix[newY][newX] = 7

            this.x = newX
            this.y = newY
        } else {
            this.mul()
        }



    }

    mul() {
        let emptyCells = this.chooseCell(8);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[this.y][this.x] = 7

            matrix[newY][newX] = 8

            this.x = newX
            this.y = newY

            let flow = new Flower(newX, newY);
            flowerArr.push(flow);
        }
    }

}
