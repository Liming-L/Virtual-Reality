let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let scene;

let cloud;
let snowflake;

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  for (let i = 0; i < 20; i++) {
    let tree = new Tree(rnd(-20, 20), 0, rnd(-20, 20));
    tree.scale(rnd(1, 4));
  }

  snowman = new Snowman(-5, 0);

  //Challenge 3: Create a cloud at some high position. Don't forget to declare the variable up top.
  cloud = new Cloud(-5, 8, 0);

  //Challenge 7: Create a snowflake at some high position. Don't forget to declare the variable up top.
  snowflake = new Snowflake(0, 8, 0);

  loop();
});

function loop() {
  snowman.spin();

  // Challenge 4: Make the cloud fly
  cloud.fly();

  // Challenge 8: Make the snowflake fall
  snowflake.fall();

  window.requestAnimationFrame(loop);
}