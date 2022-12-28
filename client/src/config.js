const apiEndpoint = 'http://localhost:8000';
const config = {
  // TODO: Change for the production environment
  apiEndpoint,
  swr: {
    fetcher: (resource, init) => {
      return fetch(apiEndpoint + resource, init).then((res) => res.json());
    },
  },
};

export default config;
