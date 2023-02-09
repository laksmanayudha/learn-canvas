const data = [
  {
    title: 'Classical Music',
    value: 25,
    color: 'red',
  },
  {
    title: 'Pop',
    value: 55,
    color: 'green',
  },
  {
    title: 'Jazz',
    value: 20,
    color: 'blue',
  },
];

const myCanvas = new Canvas('#canvasIdThree');
myCanvas
  .style({ border: '1px solid black' })
  .width(400)
  .height(400)
  // .setUp('create something', (context, drawer) => {
  //   context.beginPath();
  //   context.moveTo(50, 50);
  //   context.lineTo(100, 50);
  //   context.lineTo(150, 100);
  //   context.moveTo(50, 50);
  //   context.lineTo(50, 100);
  //   context.lineTo(100, 150);
  //   context.stroke()

  //   drawer.drawPieSlice({
  //     centerX: 100,
  //     centerY: 100,
  //   });
  // })
  .setUp('create pie chart', (context, drawer) => {
    const pieChart = new PieChart(context, data);
    pieChart.setDefaultValue((chart) => {
      chart.centerX = 150;
      chart.centerY = 150;
    });

    pieChart.show();
  })
  .draw();