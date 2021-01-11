class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.bodyd1 = Bodies.rectangle(900,660,170,20);
        
        this.bodyd2 = Bodies.rectangle(980,610,20,80);
      
        this.bodyd3 = Bodies.rectangle(820,610,20,80);
        
        
        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height 
        
   }
   display(){
       fill("yellow");
       rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
   }
}