function createGraph(data,x,y){

  // for(var i=1; i< data.length-1; i++)
  //   {console.log(data[i]);}

//First Chart
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

//Second Chart
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



//Third Chart
var tosswin = 0;
for(var i=1; i< data.length - 1 ; i++)
     if(data[i][6] == data[i][10])
         tosswin ++;
  tosswin /= (data.length - 1) ;
  tosswin = tosswin* 100;

  var chart = c3.generate({
    bindto: '#chart3',
    data: {
        // iris data from R
        columns: [
            ['Percentage of times toss winner won the match', tosswin],
            ['Percentage of times toss winner lost the match', 100 - tosswin],
        ],
        type : 'pie',

    }
});

//fourth chart
var batwin=0,bowlwin =0;
for(var i=1; i< data.length - 1 ; i++)
    { if(data[i][7] == 'bat' && data[i][6] == data[i][10])
         batwin++;
      if(data[i][7] == 'field' && data[i][6] == data[i][10])
          bowlwin++; }
 var per1 = (batwin / (batwin+bowlwin)) *100;
 console.log(per1);

      var chart = c3.generate({
          bindto: '#chart4',
          data: {
              // iris data from R
              columns: [
                  ['Percentage of times choosing to bat won the match', per1],
                  ['Percentage of times choosing to field won the match', 100-per1],
                  ],
                  type : 'pie',

              }
      });


}
