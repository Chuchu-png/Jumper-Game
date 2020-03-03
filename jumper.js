function jumper() {
  this.x = 0;
  this.y = 0;
  this.gravity = 0.5; // force pulls you down
  this.lift = -10; // lifts you up (opposing force of gravity)
  this.velocity = 0; //spped of gravity force
  
  //building a function to display on screen where i put values of what jumper looks like
  this.show = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, 100, 100);
    noStroke();
  };
  
  //build a function called UP that will take inital velocity and modify opposing gravity
  
  this.up = function() {
    this.velocity += this.lift;
  };
  
  //this will continuously update the jumper
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    
    //if the jumper hits the ground -> STOP this will prevent the jumper from leaving the ground
    
    if(this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    
    //this will prevent the jumper from leaving the ceiling
    if(this.y < 0) {
      this.y = 0;
      this.velocity= 0;
    }
    
  };
  
  
}