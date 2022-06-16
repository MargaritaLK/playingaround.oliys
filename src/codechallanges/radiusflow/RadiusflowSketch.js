import React from "react";
import Sketch from "react-p5";
import { Dots } from "./Dots"


let angle = 0;
let angleV = 0.01;
let dots_a = [];
let dots_b = [];


let loopcounter = 0
let maxloops = 4000

let widthWindow = window.innerWidth * 0.9
let heightWindow = window.innerHeight * 0.7


const RadiusflowApp = (props) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(widthWindow, heightWindow).parent(canvasParentRef);

     // radius, startAngle, size, color, alpha
    for (let i = 0; i < 30; i++) {
      dots_a[i] = new Dots(
        p.random(10, 200),
        p.random(-p.TWO_PI, p.TWO_PI),
        p.random(1, 10),
        '#06d6a0',
        p.random(10, 300)
      )
    }
    for (let i = 0; i < 30; i++) {
      dots_b[i] = new Dots(
        p.random(10, 200),
        p.random(-p.TWO_PI, p.TWO_PI),
        p.random(1, 10),
        '#EF476F',
        p.random(10, 300)
      )
    }


  };



  const draw = (p) => {
    // p.background(7, 59, 76, 40)


    p.translate(p.width / 2, p.height / 2)
    p.rectMode(p.CENTER);
    p.rotate(angle);
    p.background(52, 58, 64, 40)

    console.log('ss');


    for (let dot of dots_a) {
      dot.show(p)
      dot.update(p)
    }

    for (let dot of dots_b) {
      dot.show(p)
      dot.update(p)
    }



    p.noStroke()
    p.fill(239, 71, 111, 200)
    p.circle(0, 0, 20)

    angle += angleV;


    // set max loops
    loopcounter += 1
    if (loopcounter == maxloops) {
      p.noLoop()
    }

    // p.frameRate(10)

  };




  return <Sketch setup={setup} draw={draw} />;
};


export default RadiusflowApp
