class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","brown");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height","8");
    
    scene.append(this.obj);

  }
}