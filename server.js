const axios = require ("axios");

axios.get('http://webcode.me').then(resp => {

  console.log(resp.data);
    }).catch(error => {
    console.log(error.message);
  });
