import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  
    animation: {
        duration: 0,
    },
  plugins: {
    datalabels: {
        display: true,
        // anchor: 'end',
        align: 'top',
        color: '#fff',
        formatter: (value, context) => {
          if (value === 0) {
            return '';
          }
          return value;
        },
      },
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  
  scales: {
    x: {
        grid: {
            tickColor: "rgb(49, 140, 231, 0.5)",
            display: false,
        },
        ticks: {
            color: "#fff",
        },
        border: {
          color: 'rgb(49, 140, 231, 0.5)',
        }
      },
      y: {
        display: false,
        grid: {
            tickColor: "rgb(49, 140, 231, 0.5)",
        },
        
        ticks: {
            color: "#fff",
        },
        border: {
            color: 'rgb(49, 140, 231, 0.5)',
        },
    },
    },
    
};

const labels = ['2015', '2016', '2017', '2018', '2021', '2022', '2023'];

export const data = {
  labels,
  datasets: [
    {
        label: 'Dataset 1',
        data: [100, 400, 500, 600, 700, 800, 200],
        backgroundColor: 'rgba(4, 45, 95, 0.8)',
        borderColor: '#318CE7',
        borderWidth: 1,
        borderSkipped: "start",
    },
  ],
};

export function BarChart() {
  return ( 
    <div style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
        background: 'linear-gradient(to top right, #0A2E6D, #061D3D)',
        boxShadow: "0px 0px 5px 2px rgba(49, 140, 231, 0.1) inset",
            
    }}>
        <Bar options={options} data={data} 
            plugins={[ChartDataLabels]} 
            width={"100%"} height={"100%"}/>
    </div>
  )
}
