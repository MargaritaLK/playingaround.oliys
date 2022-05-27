
export class Drop {
  constructor(p5,) {
    this.x = p5.random(-p5.width / 2, p5.width / 2);
    this.y = p5.random(-p5.height / 2, p5.height / 2);
    this.z = p5.random(1, 20);
    this.len = p5.map(this.z, 0, 20, 1, 4);
    this.dropsize = p5.map(this.z, 0, 20, 1.5, 2.2);
    this.color = p5.color('#5c6270');
    this.alphavalue = 100;
    this.yspeed = p5.map(this.z, 0, 20, 2, 3.5);

  }

  fall(p5) {
    this.y = this.y + this.yspeed;
    // let grav = p5.map(this.z, 0, 20, 0, 0.3)
    // this.yspeed + grav
    if (this.y > p5.height) {
      this.y = p5.random(-p5.height / 2, p5.height / 2);
      // values back to default- needs improvement
      this.color = p5.color('#5c6270');
      this.dropsize = p5.map(this.z, 0, 20, 1, 2)
      this.alphavalue = 100
    }
  }


  atsea(p5) {
    let startWater = (p5.height / 9);
    if (this.y > startWater && this.y < p5.height / 2) {
      this.color = p5.color('#cfd2cf')
      // this.color = p5.color('#fe6d73')
    }
  }

  splash(p5) {
    let startWater = (p5.height / 9);
    let randomwaterlocation = p5.random(startWater, p5.height / 2)
    if (this.y > randomwaterlocation && this.y < p5.height / 2) {
      this.color = p5.color('#ffffff')
      this.z = p5.random(10, 20)
      this.y = this.y + this.y - 1
      this.dropsize = p5.map(this.z, 0, 20, 1.5, 2)
      this.alphavalue = 10
    }
  }




  show(p5) {
    let color1 = this.color
    color1.setAlpha(this.alphavalue);
    p5.stroke(color1);
    p5.strokeWeight(this.dropsize)
    p5.line(this.x, this.y, this.x, this.y + this.len);
  }





}
