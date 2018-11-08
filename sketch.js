var sk = function (sketch) {
  sketch.setup = function() {
// put setup code here
let newCanvas = sketch.createCanvas(windowWidth, document.body.clientHeight);
newCanvas.style = ('pointer-events', 'none')
newCanvas.position(0,0);

sketch.clear();
}
sketch.draw = function() {
//  background(0,60)
  sketch.stroke(0);
  sketch.strokeWeight(4);
  if (sketch.mouseIsPressed) {line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);}
// put drawing code here
}

function sketch.keyPressed() {
  if (sketch.key === 'a') {
      //save('myCanvas.png');
  }
}
var newP5 = new p5(sk)