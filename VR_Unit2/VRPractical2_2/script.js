let scene, pokemon, rocket, sun, car, dude;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  pokemon = document.querySelector("#pokemonball");
  rocket = document.querySelector("#rocket");
  sun = document.querySelector("#sun");
  car = document.querySelector("#car");
  dude = document.querySelector("#dude");

  car.x=0;
  car.dx=-0.01;

  rocket.y=-0;
  rocket.dy=0.04;

  pokemon.x=0;
  pokemon.dx=5;

  dude.x=0;
  dude.dx=0.05;
  dude.z=0;
  dude.dz=0.05;

  sun.x=0;
  sun.dx=0.1;

  loop();
})

function loop(){
    car.x+=car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:-5});

    rocket.y+=rocket.dy;
    rocket.setAttribute("position",{x:0, y:rocket.y, z:0});

    pokemon.x+=pokemon.dx;
    pokemon.setAttribute("rotation",{x:pokemon.x, y:0, z:0});

    dude.x+=dude.dx;
    dude.z+=dude.dz;
    dude.setAttribute("scale",{x:dude.x, z:dude.z});

    sun.x+=sun.dx;
    sun.setAttribute("opacity",{x:sun.dx});

    window.requestAnimationFrame(loop);
}