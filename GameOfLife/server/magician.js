let LivingCreature = require('./livingCreature')

module.exports = class Magician extends LivingCreature {


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
    
    
    chooseCell(character, character2) {
        this.getNewCoordinates();
        return super.chooseCell(character,character2);
    }



    eat() {
        let foods = this.chooseCell(2, 3)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.move()
        }
    }


    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

    }

    die() {

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[0].length; x++) {

                if (matrix[y][x] == 4) {
                    matrix[y][x] = 0
                }
                for (var i in magicianArr) {

                    magicianArr.splice(i, 5);
                    break;

                }
            }
        }
    }



}


