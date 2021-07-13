class Box extends BaseClass{
constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("wood1.png");
    this.visiblity=255;
  }
  display()
  {
    //console.log(this.body.speed);
    if (this.body.speed<3) {
      super.display();
    }
    else{

     
      push();
      this.visiblity=this.visiblity-5;
      fill(255,0,0,this.visiblity);
      //rect(0,0, this.width, this.height);
      pop();
      World.remove(world,this.body);
      }
   
  }
}