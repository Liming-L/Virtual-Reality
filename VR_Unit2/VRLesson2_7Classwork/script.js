let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-10,10);
    let y = 1;
    let z = rnd(-10,10);

    dudes.push(new Dude(x,y,z));
  }

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  
  for(let i = 0; i < dudes.length; i++){
    dudes[i].jump();
  }
  
  window.requestAnimationFrame(loop);
}
