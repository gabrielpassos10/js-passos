function setup() {
    createCanvas(400, 400);
    background("#FF1600")
  }
  
  function draw() {
    stroke("blue");
    fill("rgb(0,233,255)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  