import React from 'react';
import { Card, Typography, Space, Button } from 'antd';

const { Title, Paragraph } = Typography;

const Exchanges = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card 
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f5f5f5' }}
        title={<Title level={2}>Work in Progress!</Title>}
        bordered={false}
      >
        <Paragraph style={{ fontSize: '18px', color: '#555' }}>
          The <strong>Exchanges</strong> component is under development. Stay tuned for updates!
        </Paragraph>

        <Button type="primary" size="large" style={{ marginTop: '20px' }}>
          Check Other Features
        </Button>
      </Card>

    
      <Card 
        style={{ width: '100%', maxWidth: '800px', margin: '30px auto', padding: '20px', backgroundColor: '#e0e0e0' }}
        title={<Title level={3}>About Us</Title>}
        bordered={false}
      >
        <Paragraph style={{ fontSize: '18px', textAlign: 'center', color: '#555' }}>
          Welcome to <strong>CryptoSphere</strong> – a platform designed to provide users with the latest and most accurate cryptocurrency information.
        </Paragraph>

        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          At CryptoSphere, we are dedicated to bringing you comprehensive insights into the world of cryptocurrencies. Our mission is to help you stay informed with real-time data on cryptocurrencies, exchanges, news, and more.
        </Paragraph>

        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          We are constantly working on enhancing our platform to provide you with an easy-to-use and trustworthy source of information. Whether you're a seasoned investor or new to the crypto space, CryptoSphere aims to be your go-to destination for all things cryptocurrency.
        </Paragraph>
      </Card>
    </div>
  );
};

export default Exchanges;