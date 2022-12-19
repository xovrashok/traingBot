const API_URL = 'http://localhost:8000';


async function httpGetSymbols() {
  const response = await fetch(`${API_URL}/markets`);
  return await response.json();
}


async function httpCreateOrder(order) {
  try {
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

async function httpFetchOpenPosition() {
  const response = await fetch(`${API_URL}/position`);
  return await response.json();
}


async function httpClosePosition(position) {
  try {
    return await fetch(`${API_URL}/position`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(position),
    }); 
  } catch(err) {
    console.log(err);
    //return {
      //ok: false,
    //};
  }
}



export {
  httpGetSymbols,
  httpCreateOrder,
  httpFetchOpenPosition,
  httpClosePosition
};




