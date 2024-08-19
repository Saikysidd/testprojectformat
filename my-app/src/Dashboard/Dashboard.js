import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuickLinks from '../Pages/QuickLinks';
import TradingAccounts from '../Pages/TradingAccounts';
import Overview from '../Pages/Overview';
import OpenTrades from '../Pages/OpenTrades';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <Container fluid className="px-4">
      <Row className="mb-3">
        <Col lg={8} md={12} sm={12} className="mb-3">
          <QuickLinks />
        </Col>
        <Col lg={4} md={12} sm={12} className="mb-3">
          <TradingAccounts />
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={12} sm={12} className="mb-3">
          <Overview />
        </Col>
        <Col lg={4} md={12} sm={12} className="mb-3">
          <OpenTrades />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
