class CanvasDrawer {
  constructor(context) {
    this.context = context;
    this.drawLine = this.drawLine.bind(this);
  }

  drawLine(options = {}) {
    const { 
        startX = 0, 
        startY = 0, 
        endX = 100, 
        endY = 0, 
        color = 'red',
    } = options;
    this.context.save();
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.lineTo(endX, endY);
    this.context.stroke();
    this.context.restore();
  }

  drawArc(options = {}) {
    const { 
        centerX = 0, 
        centerY = 0, 
        radius = 50, 
        startAngle = 0, 
        endAngle = Math.PI * 2, 
        color = 'black',
    } = options;
    this.context.save();
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, startAngle, endAngle);
    this.context.stroke();
    this.context.restore();
  }

  drawPieSlice(options = {}) {
    const {
        centerX = 0,
        centerY = 0,
        radius = 50, 
        startAngle = 0, 
        endAngle = Math.PI/2,
        fillColor = 'red',
        strokeColor = 'black',
    } = options;
    this.context.save();
    this.context.strokeStyle = strokeColor;
    this.context.fillStyle = fillColor;
    this.context.beginPath();
    this.context.moveTo(centerX, centerY);
    this.context.arc(centerX, centerY, radius, startAngle, endAngle);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();
    this.context.restore();
  }
}

class Canvas {
  constructor(selector) {
    // set object properties
    this.canvas  = Canvas.getElement(selector);
    this.context = this.canvas.getContext('2d');
    this.drawer = new CanvasDrawer(this.context);
    this.drawables = [];

    // binding method
    this.width = this.width.bind(this);
    this.height = this.height.bind(this);
    this.style = this.style.bind(this);
    this.setUp = this.setUp.bind(this);
    this.draw = this.draw.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    
    // set default value
    this.setDefaultValue();
  }

  setDefaultValue() {
    this.width(200);
    this.height(200)
  }

  static getElement(selector) {
    return document.querySelectorAll(selector)[0];
  }

  style(styles) {
    for (let prop in styles) this.canvas.style[prop] = styles[prop];
    return this;
  }

  width(size) {
    if (!size) return this.canvas.width;
    this.canvas.width = size;
    return this;
  }

  height(size) {
    if (!size) return this.canvas.height;
    this.canvas.height = size;
    return this;
  }

  setUp(name, action) {
    this.drawables.push({ name, action });
    return this;
  }

  draw() {
    this.drawables.forEach((drawable) => {
      drawable.action(
        this.context, 
        this.drawer,
        this.canvas, 
      )
    });
    return this;
  }
}

class PieChart {
  constructor(context, data) {
    // set object properties
    this.context = context;
    this.data = data;
    this.totalValue = PieChart.getTotalValue(data);

    // binding method
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.sliceAngle = this.sliceAngle.bind(this);
    this.drawSlices = this.drawSlices.bind(this);
    this.show = this.show.bind(this);
    
    // set default value for pie chart
    this.setDefaultValue((chart) => {
      chart.centerX = 0;
      chart.centerY = 0;
      chart.startAngle = -Math.PI / 2; // from 12 o'clock
    })
  }

  static getTotalValue(data) {
    return data
            .map((item) => item.value)
            .reduce((total, value) => total += value, 0);
  }

  setDefaultValue(set) {
    set(this);
  }

  sliceAngle(value) {
    return 2 * Math.PI * value / this.totalValue;
  }

  drawSlices() {

  }

  show() {
    console.log(this.startAngle);
  }
}