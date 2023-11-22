let LivingCreature = require("./livingCreature");

module.exports = class Water extends LivingCreature {


    getNewCoordinates() {
        this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
        ];
        }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }



    move() {


        let emptyCells = this.chooseCell(6)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        console.log(emptyCells);

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

    }




    mul() {
        let emptyCell = this.chooseCell(6)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let wat = new Water(newX, newY)

            waterArr.push(wat)


        } else {
            this.move()
        }
    }



}





