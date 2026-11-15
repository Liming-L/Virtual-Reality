let scene;
let mechTemplate;
let army = [];

window.addEventListener("DOMContentLoaded", function() {
    scene = document.querySelector("a-scene");

    mechTemplate = document.getElementById("mech-1");

    for (let x = -40; x < 40; x += 20) {
        for (let z = -40; z < 40; z += 20) {

            let m = new Mech(x, 13, z);

            army.push(m);
        }
    }

});

function loop() {

    window.requestAnimationFrame(loop);

}
