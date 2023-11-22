let LivingCreature = require('./livingCreature')


module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        console.log(newCell, 'GRASS');
        if (this.multiply >= 8 && newCell) {
            let x = newCell[0]
            let y = newCell[1]
            var gr = new Grass(x, y, 1)
            grassArr.push(gr);
            this.multiply = 0;
        }
    }
}