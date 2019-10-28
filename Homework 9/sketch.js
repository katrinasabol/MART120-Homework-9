function setup() {
    createCanvas(800,600);
  }
  
  function draw() {
    background(190, 138, 255);
//name text
    fill(0);
    textSize(32);
    text('Self Portrait', 15, 50);

    fill(0);
    textSize(32);
    text('Katrina Sabol', 575,50)

//arms
    fill(46, 46, 46);
    triangle(200, 200, 362.5, 185, 362.5, 250);
    triangle(437.5, 185, 600, 200, 437.5, 250);

//legs
    fill(46, 46, 46)
    rect(362.5,325,25,200)
    rect(412.5,325,25,200)

//shoes
    fill(55, 19, 56);
    circle(370,500,75);
    circle(430,500,75);

//body
    fill(55, 19, 56);
    rect(362.5,175,75,150);

//head
    fill(150, 239, 255);
    circle(400,125,150);

//right eyebrow
    line(370,85,385,84);

//left eyebrow
    line(415,84,430,85)

//mouth
    rect(370,150,100,15);

//nose
    ellipse(400,125,5,15)

//eyes
    strokeWeight(10);
    point(375,100);
    point(425,100);


  }