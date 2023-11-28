let LivingCreature = require("./livingCreature");

module.exports = class Flower extends LivingCreature {


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

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in flowerArr) {
            if (this.x == flowerArr[i].x && this.y == flowerArr[i].y) {
                flowerArr.splice(i, 1);
                break;
            }
        }
    }
}
