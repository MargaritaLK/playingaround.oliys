
export class Mover {
  constructor(p, x, y, m, c, a) {
    this.pos = p.createVector(x, y);
    this.vel = p.createVector(0.01, 0.1);
    this.acc = p.createVector(1, 2);
    this.mass = m;
    this.r = p.sqrt(this.mass) * 2
    this.color = p.color(c);
    this.alphaValue = a

  }

  drag(p, c) {
    // direction of drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-0.4);

    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq)

    this.applyForce(p, drag)
  }


  applyForce(p, force) {
    let f = force.div(this.mass)
    // let f = p5.Vector.div(force, this.mass)
    this.acc.add(f);
  }


  edges(p) {
    if (this.pos.y >= p.height - this.r) {
      this.pos.y = p.height - this.r
      this.vel.y *= -1;
    }

    if (this.pos.x >= p.width - this.r) {
      this.pos.x = p.width - this.r
      this.vel.x += -1;
    } else if (this.pos.x <= 0) {
      this.pos.x = this.rq;
      this.vel.x *= -1;
    }
  }

  update(p) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0)
  }


  show(p) {
    let color1 = this.color
    color1.setAlpha(this.alphaValue);
    p.fill(color1);
    p.stroke("#f8f9fa")
    p.strokeWeight(0.1)
    p.ellipse(this.pos.x, this.pos.y, this.r * 2)

  }

}
