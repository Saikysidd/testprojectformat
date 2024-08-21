import React from 'react';
import { Card } from 'react-bootstrap';
import './Opentrade.css';  
const OpenTrades = () => {
  return (
    <Card className="custom-margin">
      <Card.Body>
        <h5 className="d-flex justify-content-start ">Open Trades</h5>
        <div className="card-deck">
          {[
            { currency: 'GBP/USD', type: 'Long', amount: '0.12', change: '+56.00', color: 'text-success' },
            { currency: 'USDJPY', type: 'Long', amount: '0.52', change: '-0.09', color: 'text-danger' },
            { currency: 'EURUSD', type: 'Short', amount: '0.34', change: '-1.09', color: 'text-danger' }
          ].map((trade, index) => (
            <Card key={index} className="mb-5">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: 'black', marginRight: '0.5rem' }}>
                      {trade.currency}
                    </p>
                    <span 
                      style={{
                        fontSize: '0.8rem', 
                        color: 'black',
                        backgroundColor: trade.type === 'Long' ? '#ebffee' : '#fee9e7',  
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '0.2rem', 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        marginLeft: '0.3rem' 
                      }}
                    >
                      {trade.type}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem' }}>{trade.amount}</span>
                </div>
                <h6 className={trade.color} style={{ display: 'flex', alignItems: 'start' }}>
                  {trade.change} <span style={{ color: 'black', marginLeft: '0.5rem' }}>USD</span>
                </h6>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default OpenTrades;
