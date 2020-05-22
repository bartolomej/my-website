export default class BackgroundEffect {

  constructor (container, spacing = 50, size = 10, color = 'rgba(0,0,0,1)', width, height, speed = 0.01) {
    this.container = container;
    this.spacing = spacing;
    this.size = size;
    this.time = 0;
    this.color = color;
    this.height = height;
    this.width = width;
    this.speed = speed;
  }

  init () {
    this.canvas = document.createElement('canvas');
    this.canvas.height = this.height || this.container.clientHeight;
    this.canvas.width = this.width || this.container.clientWidth;
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    this.initDots();
    window.addEventListener('resize', this.onResize.bind(this));
    console.log(this.speed)
    if (Math.abs(this.speed) > 0) {
      this.animation = requestAnimationFrame(this.render.bind(this));
    } else {
      this.render();
    }
  }

  setDimensions (width, height) {
    if (width) {
      this.width = width;
    }
    if (height) {
      this.height = height;
    }
    this.onResize();
  }

  onResize () {
    this.canvas.height = this.height || this.container.clientHeight;
    this.canvas.width = this.width || this.container.clientWidth;
    this.initDots();
    if (this.speed === 0) {
      this.render();
    }
  }

  initDots () {
    this.circles = [];
    const nCols = this.canvas.width / this.spacing;
    const nRows = this.canvas.height / this.spacing;
    for (let i = 0; i < nRows; i++) {
      let row = [];
      for (let j = 0; j < nCols; j++) {
        row.push(new Circle(this.size / 2, [this.spacing * j, this.spacing * i], this.color));
      }
      this.circles.push(row);
    }
  }

  destroy () {
    cancelAnimationFrame(this.animation);
    window.removeEventListener('resize', this.onResize.bind(this));
    this.container.removeChild(this.canvas);
  }

  render () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.circles.length; i++) {
      for (let j = 0; j < this.circles[i].length; j++) {
        const circle = this.circles[i][j];
        const [x, y] = circle.position;
        const z = Math.sin((x + this.time) * 2) * Math.cos((y + this.time) * 2) / 2;
        circle.setOpacity(z);
        circle.render(this.ctx);
      }
    }

    if (Math.abs(this.speed) > 0) {
      this.time += this.speed;
      requestAnimationFrame(this.render.bind(this));
    }
  }

}

class Circle {

  constructor (radius, position, color) {
    this.radius = radius;
    this.position = position;
    this.color = color || 'rgba(0,0,0,1)';
  }

  setOpacity (opacity) {
    const [r, g, b] = this.color
      .substring(this.color.indexOf('(') + 1, this.color.indexOf(')'))
      .split(',').map(e => parseInt(e.trim()));
    this.color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  render (ctx) {
    const [x, y] = this.position;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

}
