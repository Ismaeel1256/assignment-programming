d3.csv("https://raw.githubusercontent.com/Ismaeel1256/assignment-programming/master/population.csv")
  .row(function(d) {return { Year:Number(d.Year), change:Number(d.change)}})
  .get(function(error,data){

      var height = 500;
      var width = 960;

      var maxYear = d3.max(data,function(d){ return d.Year});
      var minYear = d3.min(data,function(d){ return d.Year});
      var maxChange = d3.max(data,function(d){ return d.change});
      var minChange = d3.min(data,function(d){ return d.change});
      console.log(maxYear)
      console.log(minYear)
      console.log(maxChange)
      console.log(minChange)

      d3.select("body")
      .selectAll("circle")
      .data()
      .attr("r", function(d) { return (r*d.change); });
    })