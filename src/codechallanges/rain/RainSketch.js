import Drop from './drop';

var drops = [];
let nrdrops = 1000;
let testrdop;
let splashdrops = []
let bg;



function RainSketch(p5) {

  p5.setup = function () {
    // bg = p5.loadImage('sea_dark.jpg')
    p5.createCanvas(1000, 800);
    p5.background('#495057');

    for (let i = 0; i < nrdrops; i++) {
      drops[i] = new Drop();
    }
    for (let i = 0; i < nrdrops / 2; i++) {
      splashdrops[i] = new Drop();
    }

  };

  p5.draw = function () {
    // p5.background('#003049');
    p5.translate(p5.width / 2, p5.height / 2);
    p5.fill('#c1121f')
    p5.ellipse(0, 0, 10, 10)
    // for (let i = 0; i < nrdrops; i++) {
    //     drops[i].show();
    //     // drops[i].atsea();
    //     // drops[i].fall();
    //   }

  };
}


// function RainSketch(p5) {


//   p5.setup = function () {
//     // bg = p5.loadImage('sea_dark.jpg')
//     p5.createCanvas(1000, 800);
//     // p5.background('#495057');

//     // for (let i = 0; i < nrdrops; i++) {
//     //   drops[i] = new Drop();
//     // }
//     // for (let i = 0; i < nrdrops / 2; i++) {
//     //   splashdrops[i] = new Drop();
//     // }

//   };

//   p5.draw = function () {
//     // p5.background(bg);
//     p5.background(200);
//     // p5.translate(p5.width / 2, p5.height / 2);
//     //   for (let i = 0; i < nrdrops; i++) {
//     //     drops[i].show();
//     //     drops[i].atsea();
//     //     drops[i].fall();
//     //   }
//     //   for (let i = 0; i < nrdrops / 2; i++) {
//     //     drops[i].show();
//     //     drops[i].atsea();
//     //     drops[i].splash();
//     //     drops[i].fall();
//     //   }

//   };


// }


export default RainSketch;
