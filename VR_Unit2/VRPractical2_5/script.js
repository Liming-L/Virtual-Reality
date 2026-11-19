/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x--x-----------------------x----o---------x-----------------x-----x",
  "x--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxxxxx--x--x--xxxxxxxxxx--Txxx--x",
  "x--x-----------x-----x--xo-------x-----x-----T--x--------x--------x",
  "x--xxxxxxxxxxxxx--x--xxxTxxxxxxxxx--x--x--xTxx--x--T--x--x--Txxx--x",
  "x--------------x--T-----x--------x--x--------x--x--x--T--x--------x",
  "xxxxxxxxxxxxx--x--xxxx--x--xxxx--x--x--xxxx--x--xxxx--xxxx--xxxxxxx",
  "x-----------x-----x--------x--x-----x-----x--x--x-----x-----x-----x",
  "x--xxTxxxx--xxxxxxx--xxxxxxxo-xxxxxxxxxT--Txxx--x--xxTx--xxxx--x--x",
  "x--------x-----------x-----------------x--------xo-x-----x-----x--x",
  "x--xxxx--xxxxxxx--xxxx--x--xxxxxxx--xxxxxxxxxxxxx--x--xxxx--xxxT--x",
  "------x--x--------x-----x--x--x---o-T-----x-----------x--------x--x",
  "x--xxxx--x--xxxxxxx--xxxx--x--x--xxxx--x--x--xxxxxTxxxx--xxxx--x--x",
  "x--x-----T-----x-----x-----x--------x--x-----x--------------x--x--x",
  "x--x--xxxxxxxxxx--xxxx--xTxxxxx--xxxx--xxxxxTx--xxxxxxxxxx--x--xo-x",
  "x--x-----------T--x-----x-----x--x-----x--------xo-------------x--x",
  "x--xxxxxxxxxx--x--x--Txxx--x--xxxx--xxxx--xxxx--x--xxxxxxxxxxxxx--x",
  "x-----------x-----x--------x--------------x--------x-----------o---",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

