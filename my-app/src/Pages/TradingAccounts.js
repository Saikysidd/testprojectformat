import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';

const TradingAccountCard = () => {
  const accountDetails = [
    {
      accountType: 'Master Account',
      platform: 'CTrader',
      accountNumber: '#4373738',
      balance: '0.00',
      currency: 'USD'
    },
    {
      accountType: 'Master Account',
      platform: 'CTrader',
      accountNumber: '#4373738',
      balance: '0.00',
      currency: 'USD'
    },
  ];

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow-sm">
        <h5 className='d-flex justify-content-start'>Trading Accounts</h5>
        {accountDetails.map((account, index) => (
          <Card key={index} className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-start align-items-start">
              <div className="flex-grow-1">
                <h6 className="text-muted">{account.accountType}</h6>
                <p className="mb-1" style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
                    padding: '2px 4px',
                    borderRadius: '4px'
                  }}>
                    {account.platform}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp; {/* This adds a gap between platform and account number */}
                  <span style={{ fontSize: '0.85rem', color: 'gray' }}>{account.accountNumber}</span>
                </p>
                <h3 className="mb-0" style={{ textAlign: 'start' }}>
                  {account.balance} <small style={{ fontSize: '0.85rem' }}>{account.currency}</small>
                </h3>
              </div>
              <div>
                <FaExternalLinkAlt size={20} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </Container>
  );
};

export default TradingAccountCard;
