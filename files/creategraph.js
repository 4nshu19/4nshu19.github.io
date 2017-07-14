function createGraph(data,x,y){

  // for(var i=1; i< data.length-1; i++)
  //   {console.log(data[i]);}


  var chart = c3.generate({
      data: {
          columns: [
              x //s8
          ]
      },
      axis: {
          x: {
              type: 'category',
              categories: y,
              show: false
          }
      }
  });


var avg_byrun=0, avg_bywic=0;
for(var i=1; i< data.length - 1 ; i++)
     {avg_byrun = avg_byrun + parseInt(data[i][11]);
      avg_bywic =  avg_bywic + parseInt(data[i][12]);}

avg_byrun = avg_byrun / (data.length-1);
avg_bywic = avg_bywic / (data.length-1);

var chart = c3.generate({
  bindto: '#chart2',
  data: {
      columns: [
          ['Average win by runs (overall)', avg_byrun],
          ['Average win by wickets (overall)', avg_bywic]
      ],
      type: 'bar'
  },
  bar: {
      width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  }
});

}
