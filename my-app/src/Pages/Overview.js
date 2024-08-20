
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Overview',
      data: [750, 500, 1000, 250, 1250, 700, 800, 400, 1400, 700, 150, 250],
      backgroundColor: '#ad8edd',
      borderColor: '#ad8edd',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 1500,
      ticks: {
        callback: function(value, index, values) {
          const desiredTicks = [0, 250, 500, 1000, 1500];
          return desiredTicks.includes(value) ? `$${value}` : '';
        },
        stepSize: 250,
      },
      grid: {
        display: false, 
      },
      border: {
        display: false, 
      },
    },
    x: {
      grid: {
        display: false, 
      },
      border: {
        display: false, 
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: true, 
    },
  },
  layout: {
    padding: 0, 
  },
  elements: {
    line: {
      borderColor: 'rgba(0, 0, 0, 0)', 
    },
    point: {
      radius: 0,
    },
  },
  backgroundColor: 'white', 
};




const Overview = () => {
  return (
    <Card className="mb-0 overview-card">
      <Card.Body>
        <h5 className='d-flex justify-content-start'>Overview</h5>
        <div className="d-flex justify-content-end">
          <Button variant="link" style={{ color: '#9b59b6', display: 'flex', alignItems: 'end' }}>
            <AiOutlineDownload style={{ marginRight: 5 }} />
            Download Report
          </Button>
        </div>
        <div className="mb-3 d-flex justify-content-start">
          <Button variant="link" style={{ fontSize: '0.85rem', color: 'gray' }}>Monthly</Button>
          <Button variant="link" style={{ fontSize: '0.85rem', color: 'black', backgroundColor: '#f1ebf9' }}>Yearly</Button>
        </div>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default Overview;
