export class Dots {
  constructor(radius, startAngle, size, color, alpha) {
    this.radius = radius;
    this.startAngle = startAngle;
    this.size = size
    this.color = color
    this.alpha = alpha
  }

  update(p) {
    if (p.mouseX < 500) { }
    let radiusChange = p.map(p.mouseX, 0, p.width, -1, 1);
    this.radius += radiusChange
  }

  show(p) {
    p.noStroke();
    let color1 = p.color(this.color)
    color1.setAlpha(this.alpha);
    p.fill(color1)
    let x_pos = p.cos(this.startAngle) * this.radius
    let y_pos = p.sin(this.startAngle) * this.radius
    p.circle(x_pos, y_pos, this.size);

  }

}
