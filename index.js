//defines the directions the knight can take through +/- value

class AllowableDirections {
    constructor() {
        this.top_left = [-1, 2]
        this.top_right = [1, 2]
        this.left_top = [-2, 1]
        this.left_bot = [-2, -1]
        this.bot_left = [-1, -2]
        this.bot_right = [1, -2]
        this.right_top = [2, 1]
        this.right_bot = [2, -1]

        this.allowable = [
            this.top_left,
            this.top_right,
            this.left_bot,
            this.left_top,
            this.bot_left,
            this.bot_right,
            this.right_top,
            this.right_bot]

        this.long = 2;
        this.short = 1;
    }
}

class Gameboard {
    constructor(dir) {
        this.board = [];

        //make the board
        for (let y = 0; y < 8; y++) {
            this.board[y] = [];
            for (let x = 0; x < 8; x++) {
                this.board[y][x] = [];
            }
        }
        this.adjencyList = this.board;
        this.directions = dir;
        this.adjecentNodes();
        this.start = [];
    }
    //Establish adjecency list by getting each square and making a list of all possible moves using allowabledirections
    //adj = [x,y]
    adjecentNodes() {

        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                let possible = this.directions.filter((adj) => {
                    return ((x + adj[0]) >= 0 && (x + adj[0]) < 8)
                }
                );

                possible = possible.filter(adj => {
                    return ((y + adj[1]) < 8 && (y + adj[1]) >= 0)
                });
                possible.forEach(element => {
                    this.adjencyList[y][x].push([element[0] + x, element[1] + y])
                });

            }
        }
    }
    addKnight(knight) {
        this.start = [knight.locX, knight.locY];
    }
    searchPath(end) {
        const init = this.start;
        const queue = [init];
        const visited = [];
        while (queue.length > 0) {
            const pos = queue.pop();
            
            if (!visited.includes(pos)) {
                if (end[0] == pos[0] &&end[1] == pos[1]) {
                    this.displayLocation(pos);
                    return pos;
                }
                else {
                    
                    const adj = structuredClone(this.adjencyList[pos[1]][pos[0]]);
                    for(let i = 0;i<adj.length;i++) {
                        
                        adj[i].parent = pos;
                        queue.unshift(adj[i]);
                    };
                    visited.push(pos);


                };
            }

        }
    }
    displayLocation(chain){
        let count = 1;
        const ar = [[chain[0],chain[1]]]
        while(chain?.parent!=undefined){
            ar.unshift([chain.parent[0],chain.parent[1]]);
            count++;
            chain = chain.parent;
        }
        console.log(`You made it in ${count} moves!`);
        ar.forEach(element => {
            console.log(`${element}`);
        });
        
    }

}
class Knight {
    constructor(locX, locY) {
        this.locX = locX;
        this.locY = locY;
        this.path = [];
    }
}
const knight = new Knight(0, 0);
const rules = new AllowableDirections();
const gb = new Gameboard(rules.allowable);
gb.addKnight(knight);
gb.searchPath([7, 7]);
gb.searchPath([4, 7]);