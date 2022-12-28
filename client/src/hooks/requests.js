const API_URL = 'http://localhost:8000';

async function httpCreateOrder(order) {
  try {
    console.log(order, 'order')
    return await fetch(`${API_URL}/orders`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }); 
  } catch(err) {
    console.log(err);
  }
}

const fetcher = (...args) => {
  return fetch(...args).then(res => res.json())
}

const sendRequest = (url, { arg }) => {
   return fetch(url, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(arg)
  }).then(res => res.json())
}



export {
  sendRequest,
  fetcher,
  httpCreateOrder,
};




