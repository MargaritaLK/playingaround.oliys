import React from 'react';
import Sketch from "react-p5";


let angle = 0;




let widthWindow = window.innerWidth * 0.9
let heightWindow = window.innerHeight * 0.7
let r = window.innerHeight/ 4;


let CirclingaroundApp = (props) => {

  const setup = (p, canvasParentRef) => {
    p.createCanvas(widthWindow, heightWindow).parent(canvasParentRef);
    p.background('#89b0ae');

  }


  const draw = (p) => {
    // p.backround(137, )
    p.noFill();
    p.translate (p.width/2, p.height/2)

    let x = r * p.cos(angle)
    let y = r * p.sin(angle)


    p.stroke(250, 249, 249, 20);
    p.strokeWeight(1);
    p.circle(0, 0, r * 2)

    p.stroke('#e07a5f');
    p.strokeWeight(p.random(2, 8))
    p.point(x, y)

    angle += 0.02;
    r += p.random(-3, 3)


  }




  return <Sketch setup={setup} draw={draw} />;

}

export default CirclingaroundApp
