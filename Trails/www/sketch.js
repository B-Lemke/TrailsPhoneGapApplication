var ball = new ball;
var cnv;
var w = window.screen.width;
var h = window.screen.height;

function setup() {
  // put setup code here
  background(0);
  cnv = createCanvas(w,h);
  cnv.parent('sketch-holder');
  ball.create();
}

function draw() {
  background(100,100,100,10);

  if (ball.life > 0){
    ball.draw();

    ball.move();
    ball.colorchange();
  } else{
    background(0);
    ball.create();
  }
}

function ball(){

  this.create = function(){


    this.vel = createVector(5,3);
    this.rad = 100;
    this.r = 128;
    this.g = 128;
    this.b = 128;
    var randX = Math.floor(Math.random() * (w-this.r));
    var randY = Math.floor(Math.random() * (h-this.r));
    this.loc = createVector(randX, randY);
    this.colScale = 30;
    this.life = 50;
  }

  this.draw = function(){
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.loc.x,this.loc.y, this.rad/2, this.rad/2)
  }

  this.move = function(){
    this.loc.x += this.vel.x;
    this.loc.y += this.vel.y;

    if (this.loc.x+this.rad/4 > w || this.loc.x-this.rad/4 < 0){
      this.vel.x = this.vel.x * -1;
      this.life--;
    }
    if (this.loc.y+this.rad/4 > h || this.loc.y-this.rad/4 < 0){
      this.vel.y = this.vel.y * -1;
      this.life--;
    }
  }

  this.colorchange = function(){
    var whichVal = floor(random()*3);
    var upOrDown = floor(random()*2);
    if (upOrDown == 0){
        if (whichVal ==0 && this.r > 0){
          this.r-= this.colScale;
        } else if (whichVal ==1 && this.g > 0){
          this.g-=this.colScale;
        } else if (whichVal ==2 && this.b > 0){
          this.b-=this.colScale;
        }
      }
   else {
        if (whichVal ==0 && this.r < 255){
          this.r+=this.colScale ;
        } else if (whichVal ==1 && this.g < 255){
          this.g+=this.colScale;
        } else if (whichVal ==2 && this.b < 255){
          this.b+=this.colScale;
        }
    }


  }
}
