let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-40,40);
    let z = rnd(-40,40);
    let x1 = rnd(-40,40);
    let z1 = rnd(-40,40);
    let x2 = rnd(-40,40);
    let z2 = rnd(-40,40);
    let tree = new Tree(x1, 0 , z1);
    let house= new House(x2,0,z2);
    let cloud= new Cloud(x,14,z);
  }

  

})