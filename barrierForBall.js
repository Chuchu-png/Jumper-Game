function barrier() {
  this.width = 50; //definite width
  this.height = 300; // definite height and changes barrier height
  this.x = w - 100;
  this.y = h - this.height;
  this.gravity = random(0, 1); // force pulls you down
  this.lift = -10; // lifts you up (opposing force of gravity)
  this.velocity = 30; //spped of gravity force


this.show = function() {
    fill(0,0,255);
    rect(this.x, this.y, this.width, this.height);
    noStroke();
  };
  
  //this will continuously update the jumper
  this.update = function() {
    this.velocity += this.gravity;
    this.x -= this.velocity;
    
    //if the jumper hits the ground -> STOP this will prevent the jumper from leaving the ground
    
    if(this.x < 0) {
      this.x = w + this.width;
      this.y = Math.floor((Math.random()* h) + h - this.height);
      this.gravity = random(0.3, 0.8); //speed
      this.velocity = 0;
    }
  }
}


