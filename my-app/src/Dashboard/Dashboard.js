import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuickLinks from '../Pages/QuickLinks';
import TradingAccounts from '../Pages/TradingAccounts';
import Overview from '../Pages/Overview';
import OpenTrades from '../Pages/OpenTrades';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <Container fluid className="px-2">
      {/* Row for QuickLinks and TradingAccounts side by side */}
      <Row className="mb-3">
      <Col lg={8} md={12} sm={12} xs={12} className="mb-3">
  <QuickLinks />
</Col>
<Col lg={4} md={12} sm={12} xs={12} className="mb-3">
  <TradingAccounts />
</Col>
      </Row>
      {/* Row for Overview and OpenTrades side by side */}
      <Row>
        <Col lg={8} md={12} sm={12} xs={12} className="mb-3">
          <Overview />
        </Col>
        <Col lg={4} md={12} sm={12} xs={12} className=" open-trades-col">
          <OpenTrades />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
