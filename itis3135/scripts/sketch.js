// First canvas
let sketch1 = (p) => {
    p.setup = function() {
      let cnv = p.createCanvas(710, 400);
      cnv.parent('canvas1');
      p.background(0);
      p.strokeWeight(10);
      p.colorMode(p.HSB);
      p.describe('Top canvas where the user draws by dragging the mouse.');
    };

    p.mouseDragged = function() {
      if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
        let lineHue = p.mouseX - p.mouseY;
        p.stroke(lineHue, 90, 90);
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      }
    };
};

  
let sketch2 = (p) => {
    p.setup = function() {
      let cnv = p.createCanvas(710, 400);
      cnv.parent('canvas2');
      p.background(255);
      p.strokeWeight(5);
      p.colorMode(p.RGB);
      p.describe('Bottom canvas where the user draws by dragging the mouse.');
    };

    p.mouseDragged = function() {
      if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
        let lineHue = p.mouseX - p.mouseY; 
        p.stroke(0, 0, 255);
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      }
    };
};

  
new p5(sketch1);
new p5(sketch2);
 

 