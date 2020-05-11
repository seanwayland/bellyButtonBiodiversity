
function refreshPlots(selected) {


    d3.json("./samples.json").then(function (data) {
        sampleData = data
        let samples = sampleData.samples
        let oneSample = samples.filter(function (e) {
            return e.id === selected
        });
        console.log(oneSample[0])
        let xVals = oneSample[0].otu_ids
        console.log(xVals)

        let yVals = oneSample[0].sample_values
       console.log(yVals)


        let yValues = []

        for ( let i = 0; i <10; i++){
            yValues.push(yVals[i])
        }

        let xValues = []

        for ( let i = 0; i <10; i++){
          xValues.push("OTU :" + xVals[i])
        }



    var plotData = [{
        type: 'bar',
        x: yValues,
        y: xValues,
        orientation: 'h'
    }];

    Plotly.newPlot('bar', plotData);

});
}