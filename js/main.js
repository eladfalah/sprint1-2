'use strict';
var HAPPY_SMILEY='😊';
var SAD_SMILEY='😒';
var WINER_SMILEY='😎';
var MINE='🧨';
var FLAG='🚩';
var gBoard;
var gLevel;
var gGame;
var gCellNextId=0
var gRCellNextId=0
var Frame=document.querySelector('.Frame')
var button=document.querySelector('button')
button.innerText=HAPPY_SMILEY
function initGame(){}
function buildBoard(){
gBoard=[]
for(var i=0;i<=3;i++){
gBoard.push([])
for(var j=0;j<=3;j++){
    gBoard[i].push({'class':'cell','id':++gCellNextId,'i':i,'j':j, 'isShown':true,'containsMine':false,'adjacentMinesCounter':0})
}    
} 
var test1=gBoard[0][1];
var test2=gBoard[0][3];
test1.containsMine=true
test1.isShown=true
test2.containsMine=true
test2.isShown=true
console.log(test1)
//console.log(test2)
console.table(gBoard)
} 
function setMinesNegsCount(board){
    for (var i = 0; i < board.length; i++) {
        console.log('1א') 
        for (var j = 0; j < board[i].length; j++){
            console.log('2א') 
        var currCell=board[i][j]
        
        if(board[i][j].containsMine){
            console.log(currCell)
            console.log('פה')
            for (var I = -1; I <=1; I++) {
                console.log('ב')
                console.log('currCell.i',currCell.i)
                if(currCell.i+I<0||currCell.i+I>board.length-1){
                    console.log('נכנס')
                    continue}
                   
                for (var J=-1; J <=1; J++){
                    console.log('1ב')
                    console.log('currCell.j',currCell.j)
                    if(currCell.j+J<0||currCell.j+J>board[0].length-1){
                        console.log('גנכנס')
                        continue}
                    ++board[i+I][j+J].adjacentMinesCounter  
                   console.log('y:',board[i+I][j+J])
                }   
        }
        }
        }    
}
}
function renderBoard(board){
    var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[i].length; j++) {
			var currCell = board[i][j];
			
            


            strHTML += '\t</td>\n';
            if(board[i][j].containsMine&&board[i][j].isShown===true){strHTML += '\t<td class="cell "id='+board[i][j].id  +' onclick='+ cellClicked(gBoard[i].find(cell=>cell.id=board[i][j].id),board[i][j].i,board[i][j].j) +'  >'+MINE+ ' </td>\n';
            console.log('s: ',board[i][j])}
            else if(board[i][j].adjacentMinesCounter&&board[i][j].isShown===true){strHTML += '\t<td class="cell "id='+board[i][j].id  +' onclick='+cellClicked(gBoard[i].find(cell=>cell.id=board[i][j].id),board[i][j].i,board[i][j].j) +'  >'+board[i][j].adjacentMinesCounter+ ' </td>\n';
        console.log('p: ',board[i][j])
        }
            else{strHTML += '\t<td class="cell "id='+board[i][j].id  +' onclick='+cellClicked(gBoard[i].find(cell=>cell.id=board[i][j].id),board[i][j].i,board[i][j].j) + '  >'+''+ ' </td>\n'}
		}
		strHTML += '</tr>\n';
	}
	
	var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    
 
}  
function cellClicked(elCell, i, j){
    elCell.isShown===true
} 
function cellMarked(elCell){}
function checkGameOver(){} 
function expandShown(board, elCell,i, j){} 

buildBoard()
setMinesNegsCount(gBoard)

var ui=setInterval(renderBoard(gBoard),1000)
