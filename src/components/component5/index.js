import React from 'react';
import './main.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const footer = (tooltipItems) => {
    let sum = 0;

  
    tooltipItems.forEach(function(tooltipItem) {
      sum += tooltipItem.parsed.y;
    });
    return 'Sum: ' + sum;
  };
export const options = {
    elements: {
        line: {
            tension: 0.5
        }
    },
    responsive: true,
    interaction: {
        intersect: false,
        mode: 'index',
      },
    animations: {
        tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.2,
        to: 0.8,
        loop: true
        }
    },
  scales: {
    y: {
        grid: {
            tickColor: "rgb(49, 140, 231, 0.5)",
        },
        
        max: 3.5,
        min: 0,
        ticks: {
            stepSize: 0.5,
            color: "#fff"
        },
        border: {
            color: 'rgb(49, 140, 231, 0.5)'
        },
    },
    x: {
        grid: {
            tickColor: "rgb(49, 140, 231, 0.5)"
        },
        max: '07:00',
        min: '08:00',
        ticks: {
            stepSize: 2,
            color: "#fff",
        },
        border: {
          color: 'rgb(49, 140, 231, 0.5)',
        }
      }
    },
    plugins: {
        tooltip: {
            callbacks: {
              footer: footer,
            },
          },
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        
    },
};
const labels = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'];
const data = {
    labels,
    color: "red",
    datasets: [
      {   type: 'line',
          fill: true,
          label: 'Dataset 1',
          data: [0.5, 0.2, 0.12, 0.3, 1, 1.5, 1.7, 1.2, 1.3, 1.5, 1.6],
          borderColor: 'rgb(34, 139, 34, 0.3)',
          backgroundColor: 'rgb(34, 139, 34, 0.2)',
          pointBackgroundColor: "#fff",
          borderWidth: 1,
      },
      {
          type: 'line',
          fill: true,
          label: 'Dataset 2',
          data: [0.5, 0.2, 0.12, 0.3, 1, 1.5, 1.7, 1.4, 1.3, 1.4, 1.4, 1, 0.8, 0.7, 0.5, 0.55],
          borderColor: 'rgb(49, 140, 231, 0.3)',
          backgroundColor: 'rgb(63,158,251, 0.2)',
          pointBackgroundColor: "#fff",
          borderWidth: 1,
      },
      {
          type: 'line',
          fill: false,
        label: 'Dataset 3',
        data: [3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3,3.3, 3.3],
        borderWidth: 2,
        borderColor: 'rgba(211, 33, 45, 0.5)',
        backgroundColor: 'rgba(49, 140, 231, 0.2)',
        pointRadius: 0,
      },
      {
          type: 'line',
          fill: false,
        label: 'Dataset 3',
        data: [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
        borderWidth: 2,
        borderColor: 'rgb(49, 140, 231, 0.5)',
        backgroundColor: 'rgba(49, 140, 231, 0.2)',
        pointRadius: 0,
      },
      {
          type: 'line',
          fill: false,
        label: 'Dataset 3',
        data: [0.2, 0.2, 0.2,  0.2,  0.2,  0.2,  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
        borderWidth: 2,
        borderColor: 'rgb(0, 98, 98, 0.7)',
        backgroundColor: 'rgba(49, 140, 231, 0.2)',
        pointRadius: 0,
      },
    ],
  };

export function Component5() {
  return <div> 
    <div style={{
            marginBottom: '30px',
        }}>
            <span style={{color: "#fff",  
                display: 'inline-block', 
                fontSize: "22px", 
                minWidth: '100px',
                textTransform: 'none',
                fontFamily: "'Orbitron', sans-serif",
                }}> <p style={{margin: 0, marginRight: '50px'}}>Lorem ipsum</p>
            <div  
            style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'rgba(2, 71, 254, 0.8)',
                position: "relative",
            }}
            >
                <span className='line'></span>
            </div>
            </span>
    </div>
    <div style={{
    minWidth: '500px',
    minHeight: '200px',
    backgroundColor: 'rgb(255,255,255, 0.1)',
    padding: '10px',
    boxShadow: '0px 0px 5px 5px rgb(255,255,255, 0.05) inset'
  }}>
    <Line options={options} type='line' data={data}/>
    </div>
    </div>
}
