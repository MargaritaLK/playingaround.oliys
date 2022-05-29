import React from "react";
import Sketch from "react-p5";
import { Drop } from "./Drop"
import sea from './sea_dark.jpg';

let nrdrops = 1000;
let drops = [];
let splashdrops = [];
let bg;

let width = window.innerWidth * 0.8
// let height = window.innerHeight * 0.7
let height = window.innerWidth * 0.6



const RainApp = (props) => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    bg = p5.loadImage(sea)
    for (let i = 0; i < nrdrops; i++) {
      drops[i] = new Drop(p5);
    }
    for (let i = 0; i < nrdrops / 2; i++) {
      splashdrops[i] = new Drop(p5);
    }
  };

  const draw = (p5) => {
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


export default RainApp;
