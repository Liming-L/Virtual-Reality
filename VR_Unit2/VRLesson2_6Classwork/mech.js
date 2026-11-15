class Mech {
    constructor(x, y, z) {

        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = mechTemplate.cloneNode(true);

        this.obj.setAttribute("position", {
            x: x,
            y: y,
            z: z
        });


        scene.append(this.obj);
    }

    launch() {

        this.y += this.dy;

        this.obj.setAttribute("position", {
            x: this.x,
            y: this.y,
            z: this.z
        });

    }
}
