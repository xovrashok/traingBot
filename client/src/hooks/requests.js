import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';

import config from '../config';

const getRequestFetcher = (url, init) => {
  return fetch(url, init).then((res) => res.json());
};

export const useGetRequest = (url) => useSWR(config.apiEndpoint + url, getRequestFetcher);

const createPostOrPutFetcher = (requestMethod) => {
  return (url, { arg }) => {
    return fetch(url, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  };
};

// https://swr.vercel.app/docs/global-configuration
export const usePostRequest = (url) => useSWRMutation(config.apiEndpoint + url, createPostOrPutFetcher('post'));
export const usePutRequest = (url) => useSWRMutation(config.apiEndpoint + url, createPostOrPutFetcher('put'));
export const useDeleteRequest = (url) => useSWRMutation(config.apiEndpoint + url, createPostOrPutFetcher('delete'));

// const API_URL = 'http://localhost:8000';
//
//
// async function httpGetSymbols() {
//   const response = await fetch(`${API_URL}/markets`);
//   return await response.json();
// }
//
//
// async function httpCreateOrder(order) {
//   try {
//     return await fetch(`${API_URL}/orders`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     });
//   } catch(err) {
//     console.log(err);
//   }
// }
//
// async function httpFetchOpenPosition() {
//   const response = await fetch(`${API_URL}/position`);
//   return await response.json();
// }
//
//
// async function httpClosePosition(position) {
//   try {
//     return await fetch(`${API_URL}/position`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(position),
//     });
//   } catch(err) {
//     console.log(err);
//     //return {
//       //ok: false,
//     //};
//   }
// }
//
//
//
// export {
//   httpGetSymbols,
//   httpCreateOrder,
//   httpFetchOpenPosition,
//   httpClosePosition
// };
//
//
//
//
