import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './TradingAccountCard.css'; 

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

  const ExternalLink = () => (
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66987 3.12403L1.7939 11L0.5 9.7061L8.37505 1.83013H1.43428V0H11.5V10.0657H9.66987V3.12403Z" fill="#667085" />
    </svg>
  );

  return (
    <Container className="mt-0">
      <Card className="p-3 shadow-sm">
        <h5 className='d-flex justify-content-start card-header'>Trading Accounts</h5>
        {accountDetails.map((account, index) => (
          <Card key={index} className="trading-account-card shadow-sm">
            <Card.Body className="d-flex flex-column">
              <div className="flex-grow-1">
                <h6 className="text-muted d-flex justify-content-start">{account.accountType}</h6>
                <div className="d-flex align-items-start" style={{ fontSize: '0.9rem' }}>
                  <span style={{
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
                    padding: '2px 4px',
                    borderRadius: '4px'
                  }}>
                    {account.platform}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'gray', marginLeft: '8px' }}>
                    {account.accountNumber}
                  </span>
                </div>
                <h3 className="mb-0 mt-2" style={{ textAlign: 'start' }}>
                  {account.balance} <small style={{ fontSize: '0.85rem' }}>{account.currency}</small>
                </h3>
              </div>
              <div className="mt-auto ms-auto">
                <ExternalLink size={30} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Card>
    </Container>
  );
};

export default TradingAccountCard;
