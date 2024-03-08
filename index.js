//defines the directions the knight can take through +/- value
/*
class AllowableDirections{
    constructor(){
        this.top_left=[-1,2]
        this.top_right=[1,2]
        this.left_top=[-2,1]
        this.left_bot=[-2,-1]
        this.bot_left=[-1,-2]
        this.bot_right=[1,-2]
        this.right_top=[2,1]
        this.right_bot=[2,-1]

        this.allowable = [
        this.top_left,
        this.top_right,
        this.left_bot,
        this.left_top,
        this.bot_left,
        this.bot_right,
        this.right_top,
        this.right_bot]

        this.long=2;
        this.short=1;
    }
}
*/
console.log(Object.getOwnPropertyNames(AllowableDirections.prototype))
class Gameboard{
    constructor(){
        this.board = [];
        this.adjencyList = [];

        //make the board
        for (let i = 0;i<8;i++){
            this.board.push(new Array(8));
        }
        
    }
    //Establish adjecency list by getting each square and making a list of all possible moves using allowabledirections
    adjecentNodes(){
        for(let n = 0;n<8;n++){
            for(let m = 0;m<8;m++){
                const possible = this.allowable;
                //Check top
                const topLeft = board[n-short]
            }
        }
    }
    
}