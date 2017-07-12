
Papa.parse(../data/deliveries.csv, {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});
