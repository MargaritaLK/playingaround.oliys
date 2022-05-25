// import Drop from './drop';


// function RainSketch () {

//     let drops = [];
//     let nrdrops = 1000;
//     let testrdop;
//     let splashdrops = []

//     function setup() {
//       bg = loadImage('sea_dark.jpg')
//       createCanvas(900, 800);
//       for (let i = 0; i < nrdrops; i++) {
//         drops[i] = new Drop();
//       }
//       for (let i = 0; i < nrdrops / 2; i++) {
//         splashdrops[i] = new Drop();
//       }
//     }


//     function draw() {
//       background(bg);
//       translate(width / 2, height / 2);
//       for (let i = 0; i < nrdrops; i++) {
//         drops[i].show();
//         drops[i].atsea();
//         drops[i].fall();
//       }
//       for (let i = 0; i < nrdrops / 2; i++) {
//         drops[i].show();
//         drops[i].atsea();
//         drops[i].splash();
//         drops[i].fall();
//       }
//     }

//   }



// export default RainSketch;
