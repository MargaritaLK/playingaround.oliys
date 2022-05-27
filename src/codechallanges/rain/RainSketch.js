import React from "react";
import Sketch from "react-p5";
import { Drop } from "./Drop"

import sea from './sea_dark.jpg';




let nrdrops = 1000;
let drops = [];
let splashdrops = [];
let bg;


export default (props) => {


  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(900, 600).parent(canvasParentRef);
    // bg = p5.loadImage('../inages/sea_dark.jpg')
    bg = p5.loadImage(sea)


   console.log(bg);

    for (let i = 0; i < nrdrops; i++) {
      drops[i] = new Drop(p5);
    }

    for (let i = 0; i < nrdrops / 2; i++) {
      splashdrops[i] = new Drop(p5);
    }

  };

  const draw = (p5) => {
    p5.background('#293241')
    p5.background(bg)
    p5.translate(p5.width / 2, p5.height / 2);

    for (let i = 0; i < nrdrops; i++) {
      drops[i].show(p5)
      drops[i].fall(p5)
      drops[i].atsea(p5)
    }

    for (let i = 0; i < nrdrops / 2; i++) {
      splashdrops[i].show(p5)
      splashdrops[i].fall(p5)
      splashdrops[i].atsea(p5)
      splashdrops[i].splash(p5)
    }

    // p5.noLoop()
  };



  return <Sketch setup={setup} draw={draw} />;
};
