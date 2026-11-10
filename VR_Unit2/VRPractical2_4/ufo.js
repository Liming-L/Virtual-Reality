class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = (0.02);

    this.obj=document.createElement("a-entity");

    let body=document.createElement("a-cylinder");
    body.setAttribute("radius","1.5");
    body.setAttribute("height","0.3");
    body.setAttribute("color","#242044");
    body.setAttribute("scale","1 1 1.3");
    body.setAttribute("position","0 0 0");
    this.obj.append(body);

    let top=document.createElement("a-sphere");
    top.setAttribute("radius","0.7");
    top.setAttribute("color","#70e8df");
    top.setAttribute("scale","1 0.9 1");
    top.setAttribute("position","0 0.5 0");
    this.obj.append(top);

    let bottom=document.createElement("a-cylinder");
    bottom.setAttribute("radius","0.8");
    bottom.setAttribute("height","0.2");
    bottom.setAttribute("color","green");
    bottom.setAttribute("position","0 -0.2 0");
    this.obj.append(bottom);

    let bottom1=document.createElement("a-cone");
    bottom1.setAttribute("radius-bottom","1.3");
    bottom1.setAttribute("height","2.8");
    bottom1.setAttribute("opacity","0.7");
    bottom1.setAttribute("color","yellow");
    bottom1.setAttribute("position","0 -0.35 0");
    this.obj.append(bottom1);

    let light1=document.createElement("a-sphere");
    light1.setAttribute("radius","0.09");
    light1.setAttribute("color","lime");
    light1.setAttribute("position","1 0.15 0.7");
    this.obj.append(light1);

    let light2=document.createElement("a-sphere");
    light2.setAttribute("radius","0.09");
    light2.setAttribute("color","lime");
    light2.setAttribute("position","-1 0.15 0.7");
    this.obj.append(light2);

    let light3=document.createElement("a-sphere");
    light3.setAttribute("radius","0.09");
    light3.setAttribute("color","lime");
    light3.setAttribute("position","0 0.15 -1");
    this.obj.append(light3);

    let light4=document.createElement("a-sphere");
    light4.setAttribute("radius","0.09");
    light4.setAttribute("color","lime");
    light4.setAttribute("position","1.3 0.15 -0.4");
    this.obj.append(light4);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }

  invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    if(this.y < 0){
      this.y = 0;
      this.dy = 0;
    }
  }
}
