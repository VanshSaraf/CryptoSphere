import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
     
      <div className="footer" style={{ padding: '20px', backgroundColor: '#001529' }}>
  <Typography.Title 
    level={5} 
    style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}
  >
    Copyright © 2025
    <span style={{ marginLeft: '5px' }}>
      <Link to="/" style={{ color: 'white', fontWeight: 'bold' }}>
        CryptoSphere
      </Link>
    </span>
    <br />
    All Rights Reserved.
  </Typography.Title>

  <Space style={{ justifyContent: 'center', gap: '15px' }}>
    <Link to="/" style={{ color: 'white' }}>Home</Link>
    <Link to="/exchanges" style={{ color: 'white' }}>Exchanges</Link>
    <Link to="/news" style={{ color: 'white' }}>News</Link>
  </Space>
</div>
    </div>
  </div>
);

export default App;
