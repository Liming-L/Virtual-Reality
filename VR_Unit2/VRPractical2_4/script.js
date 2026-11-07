let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  rocket = [];

  for (let i = 0; i < 100; i++) {
    let x = rnd(-20, 20);
    let y = rnd(10, 20);
    let z = rnd(-20, 20);
    let rockets = new Rocket(x, y, z);
    rocket.push(rockets);
  }


  loop();
})



function loop(){
  for (let rockets of rocket) {
    rockets.fly();
  }

  
  window.requestAnimationFrame( loop );
}
