
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

        let tVals = oneSample[0].otu_labels
        let textValues = []


        let yValues = []

        for ( let i = 0; i <10; i++){
            textValues.push(tVals[i])
        }

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
        text: textValues,
        orientation: 'h'
    }];

    Plotly.newPlot('bar', plotData);

        /***
         * Use otu_ids for the x values. --- xvals
         Use sample_values for the y values. --- yvals
         Use sample_values for the marker size. ---yvals
         Use otu_ids for the marker colors. ---xvals
         Use otu_labels for the text values. ---tvals
         */

        var trace1 = {
            x: xVals,
            y: yVals,
            text: tVals,
            mode: 'markers',
            marker: {
                color: xVals,
                size: yVals
            }
        };

        var Bubbledata = [trace1];

        var layout = {
            title: 'Bubble Chart Hover Text',
            showlegend: false
           // height: 600,
           // width: 600
        };

        Plotly.newPlot('bubble', Bubbledata, layout);


        /***
        "metadata":[{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0,
            "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0},
***/

        let sampleMetaData = sampleData.metadata
        let oneSampleMeta = sampleMetaData.filter(function (e) {
            return e.id === parseInt(selected)
        });
        console.log(oneSampleMeta[0])
        tableVals = oneSampleMeta[0]


        var table = d3.select("#sample-metadata");

            table.html("");



            table.append("td").text("id: " + tableVals.id);
            table.append('br')
            table.append("td").text("ethnicity: " + tableVals.ethnicity);
            table.append('br')
            table.append("td").text("gender: " + tableVals.gender);
            table.append('br')
            table.append("td").text("age: " + tableVals.age);
            table.append('br')
            table.append("td").text("location: " + tableVals.location);
            table.append('br')
            table.append("td").text("bbtype: " + tableVals.bbtype);
            table.append('br')
            table.append("td").text("wfreq: " + tableVals.wfreq);








});
}