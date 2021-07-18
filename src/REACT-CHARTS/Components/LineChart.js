import React from 'react';
import {Line} from 'react-chartjs-2';

export const LineChart = () => {

    const data = {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                label: 'Sales for 2020 in (M)',
                data:[3,2,2,1,5],
                borderColor: ['rgba(255, 206, 86, 0.2'],
                backgroundColor: ['tomato'],
                pointBackgroundColor: ['blue'],
                pointBorderColor: ['green']
            
            },
            {
                label: 'Sales for 2021 in (M)',
                data:[5,7,8,4,7],
                borderColor: ['rgba(205, 216, 86, 0.2'],
                backgroundColor: ['green'],
                pointBackgroundColor: ['tomato'],
                pointBorderColor: ['blue']
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <Line data={data} options={options}/>
    )
}
