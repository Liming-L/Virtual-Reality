class Cloud{
  constructor(x,y,z){
   this.obj=document.createElement("a-entity");

    let sphere=document.createElement("a-sphere");
    sphere.setAttribute("color", "white");
    sphere.setAttribute("radius", "0.8");
    this.obj.append(sphere);

    let sphere1=document.createElement("a-sphere");
    sphere1.setAttribute("color", "white");
    sphere1.setAttribute("radius", "0.8");
    this.obj.append(sphere1);

    let sphere2=document.createElement("a-sphere");
    sphere2.setAttribute("color", "white");
    sphere2.setAttribute("radius", "1.5");
    this.obj.append(sphere2);
    
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
}
}