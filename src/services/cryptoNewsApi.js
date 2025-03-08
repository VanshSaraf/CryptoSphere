import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders = {
  // 'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
  // 'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
  'x-rapidapi-key': 'f01f23da47mshbe6644abce2ba04p112679jsne45398087d5c',
	'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
};


const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        console.log('Making API request for news category:', newsCategory, 'with count:', count);
        
        return createRequest(`/v1/cryptodaily?category=${newsCategory}&count=${count}`);
      },
      // Handle error
      onError: (error) => {
        console.error('Error fetching crypto news:', error);
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// const http = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'cryptocurrency-news2.p.rapidapi.com',
// 	port: null,
// 	path: '/v1/cryptodaily',
// 	headers: {
// 		'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
// 		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();


// // // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // // const cryptoNewsHeaders = {
// // //     'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
// // // 		'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'

// // // };

// // // const baseUrl = 'https://crypto-news16.p.rapidapi.com';

// // // const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// // // export const cryptoNewsApi = createApi({
// // //     reducerPath: 'cryptoNewsApi',
// // //     baseQuery: fetchBaseQuery({ baseUrl }),
// // //     endpoints: (builder) => ({
// // //       getCryptoNews: builder.query({
// // //         query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
// // //       }),
// // //     }),
// // //   });
  
// // //   export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // // Headers for API authentication via RapidAPI
// // const cryptoNewsHeaders = {
// //   'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
// //   'x-rapidapi-host': 'crypto-news16.p.rapidapi.com',
// // };

// // // Base URL for Crypto News API
// // const baseUrl = 'https://crypto-news16.p.rapidapi.com';

// // // Function to create the request with headers
// // const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// // // Creating the API slice for crypto news
// // export const cryptoNewsApi = createApi({
// //   reducerPath: 'cryptoNewsApi',
// //   baseQuery: fetchBaseQuery({ baseUrl }),
// //   endpoints: (builder) => ({
// //     getCryptoNews: builder.query({
// //       query: ({ newsCategory, count }) => {
// //         console.log('Making API request for news category:', newsCategory, 'with count:', count);
// //         return createRequest(`/news?q=${newsCategory}&count=${count}`);
// //       },
// //       // Add onError to handle potential API issues
// //       onError: (error) => {
// //         console.error('Error fetching crypto news:', error);
// //       },
// //     }),
// //   }),
// // });

// // export const { useGetCryptoNewsQuery } = cryptoNewsApi;












// // // const http = require('https');

// // // const options = {
// // // 	method: 'GET',
// // // 	hostname: 'bing-news-search1.p.rapidapi.com',
// // // 	port: null,
// // // 	path: '/news?safeSearch=Off&textFormat=Raw',
// // // 	headers: {
// // // 		'x-rapidapi-key': '9e16350c7emsh4dc6b931cc36278p1d499fjsn613e1d53c782',
// // // 		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// // // 		'X-BingApis-SDK': 'true'
// // // 	}
// // // };

// // // const req = http.request(options, function (res) {
// // // 	const chunks = [];

// // // 	res.on('data', function (chunk) {
// // // 		chunks.push(chunk);
// // // 	});

// // // 	res.on('end', function () {
// // // 		const body = Buffer.concat(chunks);
// // // 		console.log(body.toString());
// // // 	});
// // // });

// // // req.end();