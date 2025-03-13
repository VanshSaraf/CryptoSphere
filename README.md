# 🪙 CryptoSphere

CryptoSphere is a platform that provides real-time cryptocurrency data, market trends, and news. It allows users to track market performance, explore detailed insights into individual cryptocurrencies, and stay updated with the latest financial news.  

---

## 🚀 Features
✅ **Real-Time Cryptocurrency Data** – Fetches live cryptocurrency details using RapidAPI.  
✅ **Market Trends & News** – Displays real-time market trends and news from reliable sources.  
✅ **Dynamic Routing** – Implements dynamic routing for seamless navigation between Cryptocurrency Details, Exchanges, and News pages.  
✅ **State Management with Redux Toolkit** – Efficient handling of global state across components.  
✅ **Ant Design for UI** – Professional and responsive design using Ant Design components.  
✅ **Future Enhancements:**  
- AI-powered cryptocurrency predictions based on historical trends.  
- Integration of MetaMask for secure cryptocurrency transactions.  

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux Toolkit, Ant Design  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **API:** RapidAPI (for real-time cryptocurrency data)  

---

## 🌐 API Integration (RapidAPI)
CryptoSphere integrates with **RapidAPI** to fetch live cryptocurrency data and market trends.  

### Setup RapidAPI:
1. Create a RapidAPI account: [https://rapidapi.com](https://rapidapi.com)  
2. Subscribe to a cryptocurrency-related API (e.g., CoinRanking API).  
3. Get your API key from the RapidAPI dashboard.  

### Example `.env` Configuration:
```env
REACT_APP_RAPIDAPI_KEY = 'YOUR_RAPIDAPI_KEY'
REACT_APP_RAPIDAPI_HOST = 'YOUR_RAPIDAPI_HOST'
