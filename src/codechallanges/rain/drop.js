
// class Drop {

//   constructor() {
//     this.x = random(-width / 2, width / 2);
//     this.y = random(-height / 2, height / 2);
//     this.color = color('#5c6270');
//     this.z = random(1, 20);
//     this.len = map(this.z, 0, 20, 1, 4);
//     this.yspeed = map(this.z, 0, 20, 2, 2.5);
//     this.dropsize = map(this.z, 0, 20, 1.5, 2.2);
//     this.alphavalue = 50;

//   }


//   fall() {
//     this.y = this.y + this.yspeed;
//     let grav = map(this.z, 0, 20, 0, 0.3)
//     this.yspeed + grav
//     if (this.y > height) {
//       this.y = random(-height / 2, height / 2);
//       // values back to default- needs improvement
//       this.color = color('#5c6270');
//       this.dropsize = map(this.z, 0, 20, 1, 2)
//       this.alphavalue = 50
//     }
//   }


//   atsea() {
//     let startWater = (height / 9);
//     if (this.y > startWater && this.y < height / 2) {
//       this.color = color('#cfd2cf')
//     }
//   }


//   splash() {
//     let startWater = (height / 9);
//     let randomwaterlocation = random(startWater, height / 2)
//     if (this.y > randomwaterlocation && this.y < height / 2) {
//       this.color = color('#ffffff')
//       this.z = random(10, 20)
//       this.y = this.y + this.y - 1
//       this.dropsize = map(this.z, 0, 20, 1.5, 2)
//       this.alphavalue = 10
//     }

//   }




//   show() {
//     let color1 = this.color
//     color1.setAlpha(this.alphavalue);
//     stroke(color1);
//     strokeWeight(this.dropsize);
//     line(this.x, this.y, this.x, this.y + this.len);
//   }


// }




// export default Drop;
