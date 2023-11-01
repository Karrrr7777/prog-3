class Flower {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.direction = []

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


    chooseCell(char1) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);


                }

            }


        }
        return found;


    }

    move() {
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)
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
        let emptyCell = this.chooseCell(8);
        let newCell = random(emptyCell);

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
