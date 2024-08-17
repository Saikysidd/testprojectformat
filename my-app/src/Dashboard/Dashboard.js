import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi'; 
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { FaMoneyBill, FaWallet, FaCogs, FaUserCheck, FaGift, FaChartLine, FaExchangeAlt, FaHistory, FaUserFriends, FaChartBar } from 'react-icons/fa';
import './Dashboard.css';

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

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <div className="d-flex justify-content-between">
              <h6>Quick Links</h6>
            </div>
            <Card.Body>
              <Row>
                
                {[
                  { icon: <FaMoneyBill />, text: 'Deposit' },
                  { icon: <FaWallet />, text: 'Withdraw' },
                  { icon: <FaCogs />, text: 'Settings' },
                  { icon: <FaUserCheck />, text: 'Verification' },
                  { icon: <FaGift />, text: 'Bonuses' },
                  { icon: <FaChartLine />, text: 'MT5' },
                  { icon: <FaExchangeAlt />, text: 'Transfer' },
                  { icon: <FaHistory />, text: 'History' },
                  { icon: <FaUserFriends />, text: 'Partner' },
                  { icon: <FaExchangeAlt />, text: 'Exchange' },
                  { icon: <FaChartBar />, text: 'Analytics' },
                ].map((link, index) => (
                  <Col key={index} lg={3} md={3} sm={4} xs={6}>
                    <Card className="custom-card">
                      <Card.Body>
                        <Button variant="light" className="w-100">
                          {link.icon} {link.text}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

             
            </Card.Body>
          </Card>

          
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5>Overview</h5>
                <Button variant="link" style={{ color: '#9b59b6', display: 'flex', alignItems: 'center' }}>
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
        </Col>

       
       <Col lg={4}>
      <Card className="mb-4">
        <Card.Body>
          <h5 className='d-flex justify-content-start'>Trading Accounts</h5>
          <Card>
      <Card.Body>
        <p className='d-flex align-items-start'>Master Account</p>
        <div className='d-flex align-items-center'>
        <button className='btn btn-dark btn-sm rounded me-3 align-items-center custom-button'>
  C Trader
</button>
          <span className='fs-6 text-muted'>#273728</span>
          <FiArrowRight className='ms-3' />
        </div>
        <h4 className='d-flex align-items-start'>$0.00 USD</h4>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <p className='d-flex align-items-start'>Master Account</p>
        <div className='d-flex align-items-center'>
        <button className='btn btn-dark btn-sm rounded me-3 align-items-center custom-button'>
  C Trader
</button>
          <span className='fs-6 text-muted'>#273728</span>
          <FiArrowRight className='ms-3' />
        </div>
        <h4 className='d-flex align-items-start'>$0.00 USD</h4>
      </Card.Body>
    </Card>
        </Card.Body>
      </Card>
    

         
          <Card>
      <Card.Body>
        <h5 className="d-flex justify-content-start">Open Trades</h5>
        <div className="card-deck">
          
        <Card className="mb-3">
  <Card.Body>
    <div className="d-flex justify-content-between">
      <p>
        GBP/USD <span style={{ fontSize: '0.8rem', color: 'green' }}>Long</span>
      </p>
      <span style={{ fontSize: '0.8rem' }}>0.12</span>
    </div>
    <h6 className="text-success">
      +56.00 <span style={{ color: 'black' }}>USD</span>
    </h6>
  </Card.Body>
</Card>
<Card>
<Card.Body>
    <div className="d-flex justify-content-between">
      <p>
        USDJPY <span style={{ fontSize: '0.8rem', color: 'green' }}>Long</span>
      </p>
      <span style={{ fontSize: '0.8rem' }}>0.52</span>
    </div>
    <h6 className="text-danger">
  <span style={{ color: 'red' }}>-0.09</span> <span style={{ color: 'black' }}>USD</span>
</h6>
  </Card.Body>
</Card>
<Card>
<Card.Body>
    <div className="d-flex justify-content-between">
      <p>
        EURUSD <span style={{ fontSize: '0.8rem', color: 'red' }}>short</span>
      </p>
      <span style={{ fontSize: '0.8rem' }}>0.34</span>
    </div>
    <h6 className="text-danger">
  <span style={{ color: 'red' }}>-1.09</span> <span style={{ color: 'black' }}>USD</span>
</h6>
  </Card.Body>
</Card>

        </div>
      </Card.Body>
    </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
