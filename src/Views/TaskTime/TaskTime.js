import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import Exit from '../../Components/Exit/Exit'
import { useParams } from 'react-router';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );

export default function StageTime() {
    const [times, setTimes] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/diagrams_of_tasks',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setTimes(response.data)

            Object.keys(response.data).map(item => {
                if (response.data[item] !== null){
                    var ctx = document.getElementById(item);
                    var data = []
                    Object.keys(response.data[item]).map(elem => data.push(response.data[item][elem]))
                    
                    new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: Object.keys(response.data[item]),
                            datasets: [{
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.8)',
                                    'rgba(155, 99, 132, 0.8)',
                                    'rgba(255, 199, 132, 0.8)',
                                    'rgba(10, 99, 132, 0.8)',
                                    'rgba(155, 99, 232, 0.8)',
                                    'rgba(255, 9, 132, 0.8)'
                                ],
                                borderColor: 'rgba(255, 99, 132, 0.8)'
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: item
                                },
                                legend: {
                                    display: false,
                                    labels: {
                                        color: 'rgb(255, 99, 132)'
                                    }
                                }
                            }
                        }
                    });
                }
            })
        })
    }, [])

    return(
        <div style={{ width:400, height: 400, alignSelf: 'center', paddingTop: 80}}>
            <Exit />
            <Back />
            <h2 style={{marginLeft: 20}}>Время, затраченное на задачи</h2>
            {Object.keys(times).map(item => {
                if (times[item] !== null){
                    return(
                        <canvas id={item} width='400' height='400' />
                    )
                }
            })}
        </div>
    )
}