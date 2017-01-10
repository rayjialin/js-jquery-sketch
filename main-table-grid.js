var boardSize = 16;
var button = 'button2';

// Create the empty sketch board with default board size first
$(document).ready(function(){
  createBoard(boardSize);
});

function createBoard(boardSize){
  // $('.grid').reomve();
  $('.column').remove(); //remove the grid before *to avoid create duplicate grid
  var boardLayout = boardSize * boardSize; //get the area of the board size

  var boxes = (400/boardSize) - 2; //get the size of each grid

  //create grid using float: left
  //loop over the board to insert each div (grid) to the container
  // for (var i = 0; i < boardLayout; i++){
  //   $('.container').append("<div class='grid' style='height: " + boxes + "px; width: " + boxes + "px;'></div>");
  // }

  //create grid using table
  for (var i = 0; i < boardSize; i++){
    $('.table').append("<tr class='column'></tr>");
  }
  for (var i = 0; i < boardSize; i++){
    $('.column').append("<td class='grid' style='height: " + boxes + "px; width: " + boxes + "px;'></td>");
  }

  hover(); //hover to fill the grid with color based on the button clicked
};

function hover(){
  //hover over grid with random color
  if (button == 'button3'){
    $('.grid').hover(function(){
        $(this).css('background-color', 'rgb(' + (Math.floor(Math.random() * 256))
                    + ',' + (Math.floor(Math.random() * 256))
                    + ',' + (Math.floor(Math.random() * 256)) + ')' )
    });
  }
  //hover over grid with black
  else if (button == 'button2'){
    $('.grid').hover(function(){
        $(this).css('background-color', 'black')
      });
    }
  //hover over grid with a random color and every subsequence grid would be 10%
  //darker than the previous color until the color is completely black
  else if (button == 'button4'){
    var rgb1 = Math.floor(Math.random() * 256);
    var rgb2 = Math.floor(Math.random() * 256);
    var rgb3 = Math.floor(Math.random() * 256);
    $('.grid').hover(function(){
          rgb1 = Math.floor(rgb1 - (rgb1 / 10));
          rgb2 = Math.floor(rgb2 - (rgb2 / 10));
          rgb3 = Math.floor(rgb3 - (rgb3 / 10));
        $(this).css('background-color', 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 +')')
    });
  }
};

//set the board to white
function clearBoard(){
  $('.grid').css('background-color', 'white');
};

// create a new board
function newBoard(){
  var size = prompt("Enter the block size");
  clearBoard();
  createBoard(size);
};

//create a board with black color selected
function blackBoard(){
  button = 'button2';
  newBoard();
}

//create a board with random color selected
function colorize(){
  button = 'button3';
  newBoard();
};

//create a board with gradient color selected
function gradient(){
  button = 'button4';
  newBoard();
};
