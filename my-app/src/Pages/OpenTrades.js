
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaMoneyBill, FaWallet, FaCogs, FaUserCheck, FaGift, FaChartLine, FaExchangeAlt, FaHistory, FaUserFriends, FaChartBar } from 'react-icons/fa';

const OpenTrades = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h5 className="d-flex justify-content-start">Open Trades</h5>
        <div className="card-deck">
          {[
            { currency: 'GBP/USD', type: 'Long', amount: '0.12', change: '+56.00', color: 'text-success' },
            { currency: 'USDJPY', type: 'Long', amount: '0.52', change: '-0.09', color: 'text-danger' },
            { currency: 'EURUSD', type: 'Short', amount: '0.34', change: '-1.09', color: 'text-danger' }
          ].map((trade, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: '0.9rem' }}>
                    {trade.currency} <span style={{ fontSize: '0.8rem', color: trade.type === 'Long' ? 'green' : 'red' }}>{trade.type}</span>
                  </p>
                  <span style={{ fontSize: '0.8rem' }}>{trade.amount}</span>
                </div>
                <h6 className={trade.color}>
                  {trade.change} <span style={{ color: 'black' }}>USD</span>
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
