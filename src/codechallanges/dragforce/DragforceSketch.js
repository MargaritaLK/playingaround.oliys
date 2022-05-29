import React from "react";
import Sketch from "react-p5";
import { Mover } from "./Mover"


let movers = [];
let dragC = 0.14
let nr_drips1 = 800
let smallestDrip = 2
let lagerstDrip = 30
let nr_drips2 = 80

let widthWindow = window.innerWidth * 0.9
let heightWindow = window.innerHeight * 0.7


 const DragforceApp = (props) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(widthWindow, heightWindow).parent(canvasParentRef);

    // blue
    // p, x, y, m, c, a
    for (let i = 0; i < nr_drips1; i++) {
      movers[i] = new Mover(
        p,
        p.random(p.width),
        p.random(p.height / 2),
        p.random(smallestDrip, lagerstDrip),
        // '#61a5c2',
        '#cad2c5',
        p.random(20, 100));
      }

      for (let i = 0; i < nr_drips2; i++) {
        movers[i] = new Mover(
          p,
          p.random((p.width - p.width / 2), (p.width + p.width / 2)),
          p.random(p.height / 3),
          p.random(1, 10),
          '#ff0000',
          p.random(10, 160));
        }

      };



      const draw = (p) => {
        p.background('#343a40')

        // water
        // p.fill('#005f73')
        p.fill('#354f52')

        p.noStroke()
        p.rect(0, p.height / 2, p.width, p.height / 2)

        for (let mover of movers) {
          let gravity = p.createVector(0, 0.001)
          let weight = gravity.mult(mover.mass);
          mover.applyForce(p, weight)
          mover.applyForce(p , gravity)


          if (p.mouseIsPressed) {
            let wind = p.createVector(0.1, 0)
            mover.applyForce(p, wind)
          }

          if (mover.pos.y > p.height / 2) {
            mover.drag(p, dragC)
          }


          mover.update(p)
          mover.edges(p)
          mover.show(p)

        }

        // p.noLoop()


      };



      return <Sketch setup={setup} draw={draw} />;
    };


export default DragforceApp
