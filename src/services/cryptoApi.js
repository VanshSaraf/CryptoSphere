import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    
  };

  const baseUrl = 'https://coinranking1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });



  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),


     }),
  });

  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    
    useGetCryptoHistoryQuery,
  } = cryptoApi;

  // export const {
  //   useGetCryptosQuery,
    
  // } = cryptoApi;






//best  code

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//   'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// };

// const baseUrl = 'https://coinranking1.p.rapidapi.com';

// export const cryptoApi = createApi({
//   reducerPath: 'cryptoApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl,
//     prepareHeaders: (headers) => {
//       // Add headers here
//       Object.entries(cryptoApiHeaders).forEach(([key, value]) => {
//         headers.set(key, value);
//       });
//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => '/coins',
//     }),
//   }),
// });

// export const {
//   useGetCryptosQuery,
// } = cryptoApi;







// // const http = require('https');

// // const options = {
// // 	method: 'GET',
// // 	hostname: 'coinranking1.p.rapidapi.com',
// // 	port: null,
// // 	path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
// // 	headers: {
// // 		'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
// // 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// // 	}
// // };

// // const req = http.request(options, function (res) {
// // 	const chunks = [];

// // 	res.on('data', function (chunk) {
// // 		chunks.push(chunk);
// // 	});

// // 	res.on('end', function () {
// // 		const body = Buffer.concat(chunks);
// // 		console.log(body.toString());
// // 	});
// // });

// // req.end();