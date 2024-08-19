import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaMoneyBill, FaWallet, FaCogs, FaUserCheck, FaGift, FaChartLine, FaExchangeAlt, FaHistory, FaUserFriends, FaChartBar } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <Card className="mb-2" > 
      <Card.Body > 
      <h6 className='d-flex justify-content-start' >Quick Links</h6>

        <Row className="g-2">
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
            <Col key={index} lg={2} md={6} sm={4} xs={6} className="mb-2">
              <Card className="custom-card" style={{ height: '50px' }}>
                <Button variant="light" className="w-100 text-center d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                  <div>
                    <div>{link.icon}</div>
                    <div style={{ fontSize: '0.8rem' }}>{link.text}</div>
                  </div>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuickLinks;
