let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x-T---o-----T-------------------o-----------T---o---------------Tx",
  "x-ToT-o-TTT-T-o-TTTxxxxxxxxxxxxTTT-o-TTT-TTxT-T-o-TTTTTTTTT-TTT-Tx",
  "x---o-T---o---o---T-o---------T-o-o-T-------o-T-------o---T---o-Tx",
  "xTT-o-TTT-TTTTTTT-o-T-TTTTT-o-T-o-T-o-TTTxTT-o-TTTTTTTTT-o-TTT-TTx",
  "x-x-o-----T-o-----T-x-o---T-o-T-x-----o---T---o-T-------o---T-x-Tx",
  "x-o-T-TTTTT-o-TTTTT-o-T-o-T-TTT-TTTTT-TTT-TTTTT-o-TTTTTTTTT-o-T-Tx",
  "x-o-T---o---o-T---o---T-o-T-----o-----T---------o-T-------o-T-o-Tx",
  "x-o-TTT-o-T-o-TTT-o-TTTTT-TTTTTTTTTTT-o-TTTTT-TTT-o-TTT-TTT-TTT-Tx",
  "x-o-T-x---T-o---T---o---T---o-------T---o-----T---o-T-o-----T---Tx",
  "x-o-T-TTTTT-TTT-o-TTT-o-T-TTT-TTT-o-TTTTT-TTTTT-TTT-o-TTTTTTT-TTTx",
  "x---o---------T-o---T-o-T---o-T---o---T---o-----T-o-----o-------Tx",
  "x-TTTTTxxxxxxxTT-TTT-o-T-TTT-o-T-TTTTT-TTTTT-TTTTT-TTTTT-o-TTTTT-x",
  "x-----o-------T-o-----T---o---T-o-------T---o-----T-x---o---T---Tx",
  "xTTTT-o-TTTTT-o-TTTTTTTTT-TTT-o-TTTTTTT-o-TTT-TTT-o-T-TTT-TTT-o-Tx",
  "x-x---o-T-----o---------T---o-T-----o-x-T-o---T-----o---T-o---o-Tx",
  "x-o-TTT-o-TTTTxxxxxxxxxT-TTT-TTTTTTT-o-T-o-T-TTTTTTTTTTT-TTT-TTT-Tx",
  "x-------o---------------T-----------o-----T-----------------o-----",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
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