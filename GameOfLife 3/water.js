class Water {
    constructor(x, y) {
        this.x = x
        this.y = y
        // this.energy = 5
        this.direction = [

        ]
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



    chooseCell(char1,char2,char3) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                    }
                    if(matrix[y][x] == char2){
                        found.push(this.directions[i])

                    }

                    if(matrix[y][x] == char3){
                        found.push(this.directions[i])

                    }
            }


        }




        return found;

    }

    move() {


        let emptyCells = this.chooseCell(6)
        let newCell = random(emptyCells)
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
        let newCell = random(emptyCell)
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





