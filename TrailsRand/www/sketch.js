var ball = new ball;
var cnv;
var w = window.screen.width;
var h = window.screen.height;

var backR;
var backG;
var backB;

var backA;

function setup() {
  // put setup code here
  background(0);
  cnv = createCanvas(w,h);
  cnv.parent('sketch-holder');
  ball.create();
}

function draw() {
  background(backR, backG, backB, backA);

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
    //Pick a random back RGBa
    backR = Math.floor(Math.random() * 255);
    backG = Math.floor(Math.random() * 255);
    backB = Math.floor(Math.random() * 255);

    backA = Math.floor(Math.random() * 18);

    var randXSpeed = (Math.random() * (10 - 2) + 2);
    var randYSpeed = (Math.random() * (10 - 2) + 2);

    this.vel = createVector(randXSpeed,randYSpeed);
    this.rad = (Math.random() * (200 - 50) + 50);
    this.r = 128;
    this.g = 128;
    this.b = 128;
    var randX = Math.floor(Math.random() * (w-this.r));
    var randY = Math.floor(Math.random() * (h-this.r));
    this.loc = createVector(randX, randY);
    this.colScale = 30;
    this.life = (Math.random() * (75 - 25) + 25);

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
