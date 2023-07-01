import React from 'react';
import Plotly from 'react-native-plotly';
import * as hashtagsdetails from './hashtagsdetails.json';

let data = []
const timeline = hashtagsdetails.stats.instagram.timelineStats.timeline
timeline.forEach(elem => {
    elem.hashtagsDetail.map(elem2 => {
        const temp = {
            x: [elem.date],
            y: [elem2.count],
            name: elem2.word,
            type: 'scatter',
            mode: 'markers',
        }
        data.push(temp)
    })
})
var layout = {title: 'Hashtags over time'};

const HashtagsGraph = () => {
    return (
        <Plotly
            data={data}
            layout={layout}
            style={{ height: 500, width: '100%' }}
        />
    )
}

export default HashtagsGraph