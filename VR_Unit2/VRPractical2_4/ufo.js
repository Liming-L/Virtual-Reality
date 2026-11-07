class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(0.05, 0.2);

    this.obj=document.createElement("a-entity");

    let body=document.createElement("a-cylinder");
    body.setAttribute("radius","1");
    body.setAttribute("height","0.3");
    body.setAttribute("color","grey");
    body.setAttribute("position","0 0 0");
    this.obj.append(body);

    let top=document.createElement("a-sphere");
    top.setAttribute("radius","0.5");
    top.setAttribute("color","green");
    top.setAttribute("scale","1 0.5 1");
    top.setAttribute("position","0 0.3 0");
    this.obj.append(top);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }

  invade(){
    this.y -= this.dy;

    if(this.y < 0){
      this.y = 0;
      this.dy = 0;
    }

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}
