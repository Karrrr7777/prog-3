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

    chooseCell(character1, character2,character3) {
        this.getNewCoordinates();
        return super.chooseCell(character1,character2,character3);
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

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in waterArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                waterArr.splice(i, 1);
                break;
            }
        }
    }
    





    }

