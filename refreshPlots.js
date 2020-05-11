
function refreshPlots(selected) {


    d3.json("./samples.json").then(function (data) {
        sampleData = data
        let samples = sampleData.samples
        let oneSample = samples.filter(function (e) {
            return e.id === selected
        });
        let thisIndividualSamples = oneSample[0].otu_ids
        let individualX = oneSample[0].sample_values

        let yValues = []

        for ( let i = 0; i <10; i++){
            yValues.push(thisIndividualSamples[i])
        }

        let xValues = []

        for ( let i = 0; i <10; i++){
            xValues.push(individualX[i])
        }



    var data = [{
        type: 'bar',
        x: xValues,
        y: yValues,
        orientation: 'h'
    }];

    Plotly.newPlot('bar', data);

});
}