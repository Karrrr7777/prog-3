let LivingCreature = require("./livingCreature")

module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 10
}

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
        let foods = this.chooseCell(1, 2)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            for (var i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 16) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3

            let pred = new Predator(newX, newY)

            predatorArr.push(pred)


        }
    }

    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}