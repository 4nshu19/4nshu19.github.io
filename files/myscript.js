
var s8=['Win By Runs'],s9=['Win By Runs'],s10=['Win By Runs'],s11=['Win By Runs'],s12=['Win By Runs'],s13=['Win By Runs'],s14=['Win By Runs'],s15=['Win By Runs'],s16=['Win By Runs'];
var s8data=[],s9data=[],s10data=[],s11data=[],s12data=[],s13data=[],s14data=[],s15data=[],s16data=[];

function parseData(createGraph) {


  Papa.parse("../data/matches.csv", {
      download: true,
      complete: function(results) {
  		console.log("Finished:", results.data);
      createArray(results.data);
      createGraph(results.data);

  	}
  });
}


function createArray(data)
{ //   s8=[];s9=[];s10=[];s11=[];s12[];s13=[];s14=[];s15=[];s16=[];
   for(var i=1; i< data.length-1; i++)
    { var win = data[i][4] + " vs " + data[i][5] + "..  Win = " + data[i][10] ;
     if(parseInt(data[i][1]) == 2008)
        {s8.push(parseInt(data[i][11]));
         s8data.push(win);
         }
    }
}


function createGraph(data){

  // for(var i=1; i< data.length-1; i++)
  //   {console.log(data[i]);}


  var chart = c3.generate({
      data: {
          columns: [
              s8
          ]
      },
      axis: {
          x: {
              type: 'category',
              categories: s8data
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
          ['Average win by runs', avg_byrun],
          ['Average win by wickets', avg_bywic]
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

parseData(createGraph);
