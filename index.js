const axios = require('axios');
const base_url = 'https://ftx.com/api/';

axios.get(base_url + 'markets/BTC/USD')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  
  // axios.get(base_url + 'markets/BTC/USD/trades')
  // .then(response => {
    // console.log(response.data);
  // })
  // .catch(error => {
    // console.log(error);
  // });