import React from 'react';
import Plotly from 'react-native-plotly';
import * as sentimentData from './sentimentData.json';


let positive = []
let neutral = []
let negative = []
let date = []

sentimentData.stats.instagram.timelineStats.timeline.forEach(elem => {
  positive.push(elem.sentimentAsCategories.positiveComments)
  neutral.push(elem.sentimentAsCategories.neutralComments)
  negative.push(elem.sentimentAsCategories.negativeComments)
  date.push(elem.date)
})

var trace1 = {
  x: date,
  y: positive,
  name: 'Positive',
  type: 'scatter'
};

var trace2 = {
  x: date,
  y: neutral,
  name: 'Neutral',
  type: 'scatter'
};

var trace3 = {
  x: date,
  y: negative,
  name: 'Negative',
  type: 'scatter'
};

var data = [trace1, trace2, trace3];

var layout = {title: 'Sentiments over time'};


const SentimentsGraph = () => {
    return (
        <Plotly
            data={data}
            layout={layout}
            style={{ height: 500, width: '100%' }}
        />
    )
}

export default SentimentsGraph
