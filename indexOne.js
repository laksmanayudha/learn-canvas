new Canvas('#canvasId')
.style({ border: '1px solid black' })
.setUp('diagonal line', (context) => {
  context.moveTo(0, 0);
  context.lineTo(200, 100);
  context.stroke();
})
.setUp('circle', (context) => {
  context.beginPath();
  context.arc(95, 50, 40, 0, 2 * Math.PI);
  context.stroke();
}) 
.draw();

new Canvas('#canvasIdTwo')
.style({ border: '1px solid black' })
.setUp('circle', (context) => {
  context.beginPath();
  context.arc(95, 50, 40, 0, 2 * Math.PI);
  context.stroke();
})
.setUp('Hello world text', (context) => {
  context.font = '30px Arial';
  context.fillText('Hello World',  25, 55);
})
.draw();