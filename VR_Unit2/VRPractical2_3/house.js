class House{
  constructor(x,y,z){
    this.obj=document.createElement("a-entity");

        let wall=document.createElement("a-box");
        wall.setAttribute("width","3");
        wall.setAttribute("height","8");
        wall.setAttribute("depth","4");
        wall.setAttribute("color","yellow");
        this.obj.append(wall);

        let roof=document.createElement("a-cylinder");
        roof.setAttribute("height","3");
        roof.setAttribute("radius","2.3");
        roof.setAttribute("position","0 5.15 0");
        roof.setAttribute("rotation", "30 0 90");
        roof.setAttribute("segments-radial",3);
        roof.setAttribute("color","brown");
        this.obj.append(roof);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
}
}