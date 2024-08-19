
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
      backgroundColor: 'rgba(91, 55, 183, 0.5)',
      borderColor: 'rgba(91, 55, 183, 1)',
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
        stepSize: 500, 
        callback: function(value) {
          return `$${value}`; 
        },
      },
    },
  },
};

const Overview = () => {
  return (
    <Card className="mb-4 overview-card">
      <Card.Body>
        <h5>Overview</h5>
        <div className="d-flex justify-content-end">
          <Button variant="link" style={{ color: '#9b59b6', display: 'flex', alignItems: 'end' }}>
            <AiOutlineDownload style={{ marginRight: 5 }} />
            Download Report
          </Button>
        </div>
        <div className="mb-3 d-flex justify-content-start">
          <Button variant="link" style={{ color: 'black' }}>Monthly</Button>
          <Button variant="link" style={{ color: 'black' }}>Yearly</Button>
        </div>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default Overview;
