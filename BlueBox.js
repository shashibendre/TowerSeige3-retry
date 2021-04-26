class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        if(this.body.speed < 3){
        fill(85,136,238);
        super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            rect(this.x,this.y,20,30);
            pop();
        }
    }
    score(){
        if(this.Visibility >0 && this.Visibility <105){
          score+1;
        }
      }
}