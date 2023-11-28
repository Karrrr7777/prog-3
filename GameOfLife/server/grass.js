let LivingCreature = require('./livingCreature')


module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiple++;
        let emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiple >= 4) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY);
            grassArray.push(newGrass);
            this.multiple = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassArray) {
            if (this.x == grassArray[i].x && this.y == grassArray[i].y) {
                grassArray.splice(i, 1);
                break;
            }
        }
    }
}