
console.log("ready");

function parseData(createGraph) {


  Papa.parse("../data/matches.csv", {
      download: true,
      complete: function(results) {
  		console.log("Finished:", results.data);
      createGraph(results.data);

  	}
  });
}

function createGraph(data){

}

parseData(createGraph);
