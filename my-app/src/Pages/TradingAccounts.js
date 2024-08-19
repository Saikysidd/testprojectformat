
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const TradingAccounts = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h5 className='d-flex justify-content-start'>Trading Accounts</h5>
        <Card className="mb-3">
          <Card.Body>
            <p className='d-flex align-items-start' style={{ fontSize: '0.9rem' }}>Master Account</p>
            <div className='d-flex align-items-center'>
              <Button variant='dark' className='btn-sm rounded me-3 custom-button'>
                C Trader
              </Button>
              <span className='fs-6 text-muted'>#273728</span>
              <FiArrowRight className='ms-3' />
            </div>
            <h4 className='d-flex align-items-start'>$0.00 USD</h4>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <p className='d-flex align-items-start' style={{ fontSize: '0.9rem' }}>Master Account</p>
            <div className='d-flex align-items-center'>
              <Button variant='dark' className='btn-sm rounded me-3 custom-button'>
                C Trader
              </Button>
              <span className='fs-6 text-muted'>#273728</span>
              <FiArrowRight className='ms-3' />
            </div>
            <h4 className='d-flex align-items-start'>$0.00 USD</h4>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default TradingAccounts;
