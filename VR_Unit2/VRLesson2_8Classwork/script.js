let entity;

window.addEventListener("DOMContentLoaded",function() {
  entity = document.querySelector("#entity");
  entity.a = 0;
  entity.da = -1;

  loop();
})

function loop(){
  entity.a += entity.da;

  entity.setAttribute("rotation",{x:entity.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}