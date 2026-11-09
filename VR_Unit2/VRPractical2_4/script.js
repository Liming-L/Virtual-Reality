let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket=[], ufo=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  rocket = [];

  for (let i = 0; i < 100; i++) {
    let x = rnd(-70, 70);
    let y = rnd(10, 20);
    let z = rnd(-70, 70);
    let rockets = new Rocket(x, y, z);
    rocket.push(rockets);
  }

  for (let i = 0; i < 100; i++) {
    let x = rnd(-70, 70);
    let y = rnd(20, 30);
    let z = rnd(-70, 70);
    let ufos = new UFO(x, y, z);
    ufo.push(ufos);
  }

  loop();
})



function loop(){
  for (let rockets of rocket) {
    rockets.fly();
  }

  for (let ufos of ufo) {
    ufos.invade();
  }

  window.requestAnimationFrame( loop );
}
