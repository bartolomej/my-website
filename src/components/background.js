import React from "react";


function Background ({ color = "rgb(100,100,100)", spacing = 50, size = 10, animate = true, height }) {
  const fieldRef = React.useRef();
  const containerRef = React.useRef();

  React.useEffect(() => {
    containerRef.current.style.height = height ? `${height}px` : "100%";
    containerRef.current.style.width = "100%";
    const f = new Field(containerRef.current, spacing, size, color, animate, height);
    f.init();
    fieldRef.current = f;
    return () => {
      f.destroy();
    };
  }, [containerRef]);

  React.useEffect(() => {
    if (fieldRef.current && height) {
      containerRef.current.style.height = height ? `${height}px` : "100%";
      fieldRef.current.onResize();
    }
  }, [height]);

  return <div id="background" ref={containerRef}/>;
}

class Field {

  constructor (container, spacing = 50, size = 10, color = "rgb(100,100,100)", animate, height) {
    this.container = container;
    this.spacing = spacing;
    this.size = size;
    this.time = 0;
    this.color = color;
    this.animate = animate;
    this.containerHeight = height;
  }

  get width () {
    return this.canvas.width;
  }

  set width (w) {
    this.canvas.width = w;
    if (!this.animate) {
      this.render();
    }
  }

  get height () {
    return this.canvas.height;
  }

  set height (h) {
    this.canvas.height = h;
    if (!this.animate) {
      this.render();
    }
  }

  init () {
    this.canvas = document.createElement("canvas");
    this.canvas.height = this.container.clientHeight;
    this.canvas.width = this.container.clientWidth;
    this.ctx = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
    window.addEventListener("resize", this.onResize.bind(this));
    if (this.animate) {
      this.animation = requestAnimationFrame(this.render.bind(this));
    } else {
      this.render();
    }
  }

  onResize () {
    this.canvas.height = this.container.clientHeight;
    this.canvas.width = this.container.clientWidth;
    if (!this.animate) {
      this.render();
    }
  }

  destroy () {
    cancelAnimationFrame(this.animation);
    window.removeEventListener("resize", this.onResize.bind(this));
    this.container.removeChild(this.canvas);
  }

  render () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const nCols = this.width / this.spacing;
    const nRows = this.height / this.spacing;
    for (let i = 0; i < nRows; i++) {
      for (let j = 0; j < nCols; j++) {
        const x = j * this.spacing, y = i * this.spacing;
        const o = Math.sin((x + this.time) * Math.cos(y / 2)) * Math.sin((y + this.time) * Math.sin(x));
        this.ctx.fillStyle = withOpacity(this.color, o);
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.size / 2, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }
    this.time += 0.1;
    if (this.animate) {
      requestAnimationFrame(this.render.bind(this));
    }
  }

}

function withOpacity (c, o) {
  const [r, g, b] = c
    .substring(c.indexOf("(") + 1, c.indexOf(")"))
    .split(",").map(e => parseInt(e.trim()));
  return `rgba(${r}, ${g}, ${b}, ${o})`;
}

export default Background;
