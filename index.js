var game = require('./game');
var g = new Game();
g.clear();
g.newGame();
g.drawBoard();
var stdin = process.openStdin();
stdin.addListener('data',(d)=>{
	var move = parseInt(d.toString());
	if(isNaN(move))
		return
	if(move < 0 || move > 9)
		return
	if(g.gameOver)
		return
	g.clear();
	if(g.moveAvailable(move)){
		g.doMove(move);
	}else{
		console.log("\033[41m\033[30mInvalid move. please try again.\033[0m");
	}
	if(g.lastResult){
		console.log("\033[0m\033[32mPlayer " + g.lastResult.winner + " has won.\033[0m");
		g.drawBoard();
		return;
	}
	if(g.isTie){
		console.log("ITS A FUCKING TIE");
		return;
	}
	if(g.gameOver){
		console.log("Game over n00bs");
		return;
	}
	g.drawBoard();
});