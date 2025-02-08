import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Input, Spin, Alert } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { SearchOutlined } from '@ant-design/icons';  
import Loader from './Loader';

const { Title, Text } = Typography;
const { Search } = Input;

const News = ({ simplified }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 12,
  });

  useEffect(() => {
    if (cryptoNews?.data) {
      const filtered = cryptoNews.data.filter(news => 
        news.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        news.description?.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  }, [cryptoNews, searchKeyword]);

  const handleSearch = (value) => {
    setSearchKeyword(value);
  };

  const handleClear = () => {
    setSearchKeyword('');
    setFilteredNews(cryptoNews?.data || []);
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong!</div>;
  if (!cryptoNews || !cryptoNews.data || !Array.isArray(cryptoNews.data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
     
      {!simplified && (
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <Search
            placeholder="Search news"
            allowClear
            value={searchKeyword}
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            onClear={handleClear}
            enterButton="Search"
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '50px', 
              backgroundColor: '#f4f4f4', 
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'all 0.3s ease-in-out',
              border: '1px solid #dcdcdc', 
            }}
            suffix={<SearchOutlined style={{ fontSize: '18px', color: '#8c8c8c' }} />} 
            onFocus={(e) => e.target.style.borderColor = '#a0a0a0'} 
            onBlur={(e) => e.target.style.borderColor = '#dcdcdc'} 
          />
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Spin size="large" />
        </div>
      )}

      {filteredNews.length === 0 && searchKeyword && (
        <Alert
          message="No results found"
          type="info"
          style={{ marginBottom: '20px' }}
        />
      )}

      <Row gutter={[24, 24]} justify="start" align="top">
        {filteredNews.slice(0, simplified ? 6 : 12).map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              hoverable
              className="news-card"
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '450px', 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <a href={news.url} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
                <div className="news-image-container" style={{ position: 'relative', marginBottom: '16px' }}>
                  {news.thumbnail && (
                    <img
                      alt={news.title}
                      src={news.thumbnail}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        maxHeight: '220px', 
                      }}
                    />
                  )}
                </div>
                <Title level={4} style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.5', marginBottom: '8px' }}>
                  {news.title}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {news.description && news.description.length > 120
                    ? news.description.substring(0, 120) + '...'
                    : news.description}
                </Text>
                <Text type="secondary" style={{ fontSize: '12px', marginTop: 'auto' }}>
                  {news.createdAt
                    ? `Published on ${new Date(news.createdAt).toLocaleDateString()}`
                    : 'Date not available'}
                </Text>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;

// without search bar funcyionality


// import React from 'react';
// import { Row, Col, Card, Typography } from 'antd';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// const { Title, Text } = Typography;

// const News = ({ simplified }) => {
//   const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery({
//     newsCategory: 'Cryptocurrency',
//     count: simplified ? 6 : 12,
//   });

 

 
//   if (isLoading) return <div>Loading...</div>;

 
//   if (error) return <div>Something went wrong!</div>;

//   if (!cryptoNews || !cryptoNews.data || !Array.isArray(cryptoNews.data)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <Row gutter={[24, 24]} justify="start" align="top">
    
//       {cryptoNews.data.slice(0, simplified ? 6 : 12).map((news, i) => (
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card
//             hoverable
//             className="news-card"
//             style={{
//               borderRadius: '8px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               display: 'flex',
//               flexDirection: 'column',
//               height: '450px', 
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//           >
//             <a href={news.url} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
//               <div className="news-image-container" style={{ position: 'relative', marginBottom: '16px' }}>
              
//                 {news.thumbnail && (
//                   <img
//                     alt={news.title}
//                     src={news.thumbnail}
//                     style={{
//                       width: '100%',
//                       height: 'auto',
//                       borderRadius: '4px',
//                       objectFit: 'cover',
//                       maxHeight: '220px', 
//                     }}
//                   />
//                 )}
//               </div>
           
//               <Title level={4} style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.5', marginBottom: '8px' }}>
//                 {news.title}
//               </Title>
            
//               <Text
//                 type="secondary"
//                 style={{
//                   display: 'block',
//                   marginBottom: '8px',
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                   whiteSpace: 'nowrap',
//                 }}
//               >
//                 {news.description && news.description.length > 120
//                   ? news.description.substring(0, 120) + '...'
//                   : news.description}
//               </Text>
             
//               <Text type="secondary" style={{ fontSize: '12px', marginTop: 'auto' }}>
//                 {news.createdAt
//                   ? `Published on ${new Date(news.createdAt).toLocaleDateString()}`
//                   : 'Date not available'}
//               </Text>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default News;
