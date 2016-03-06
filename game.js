module.exports = Game = function(){
	this.board=""; 
	this.p1Turn;
	this.lastResult;
	this.newGame = ()=>{
		this.board="123456789";
 	this.p1Turn = true;
 	this.lastResult = null;
 	this.isTie = false;
 	this.gameOver = false;
	}
	this.gameWon = ()=>{
		var winPatterns = [/(X|O)\1{2}.{6}/,/.{3}(X|O)\1{2}.{3}/,/.{6}(X|O)\1{2}/,/(X|O).{3}\1.{3}\1/,/.{2}(X|O)(.\1){2}/,/(X|O)..\1..\1../,/.(X|O)..\1..\1/,/..(X|O)..\1..\1/];
		this.lastResult = null;
		winPatterns.forEach((p)=>{
			var win = new RegExp(p).exec(this.board);
			if(win !== null){		
				this.lastResult = {winner: win[1], board: win[0]};
				this.gameOver=true;
				return;
			}
		});		
	}
	this.doMove=(move)=>{
		var mark = this.p1Turn ? "X" : "O";
		this.board = this.board.replace(move, mark);
		this.p1Turn = !this.p1Turn;
		if(/\d/.test(this.board) == false){
			this.isTie = true;
			this.gameOver = true;
			console.log("game over");
		}
		this.gameWon();
	}
	this.moveAvailable= (move)=>{return new RegExp(move).test(this.board);}
	this.clear=()=>{console.log('\033[2J');}
	this.drawBoard=()=>{
			var b=this.board.split('');
			console.log("     ");console.log("     ");
			console.log("      "+b[0]+" | "+b[1]+" | "+b[2]);
			console.log("     ---+---+---");
			console.log("      "+b[3]+" | "+b[4]+" | "+b[5]);
			console.log("     ---+---+---");
			console.log("      "+b[6]+" | "+b[7]+" | "+b[8]);
			console.log("     ");console.log("     ");
			if(!this.gameOver	){
				console.log( this.p1Turn ? "     Player 1's turn" : "     Player 2's turn");
				console.log("     ");console.log("     ");
			}
	}
	
}