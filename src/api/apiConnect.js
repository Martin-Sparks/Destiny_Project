import axios from 'axios';
import React, {Fragment} from 'react';

var config = {
  method: 'get',
  url: 'https://www.bungie.net/Platform/Trending/Categories/',
  headers: { 
    'X-API-Key': '081a57e392444e60949b849d3a1d27e0', 
    'Cookie': 'Q6dA7j3mn3WPBQVV6Frr5izQXv0q+I9ddZfGro+PognXQwjW=v1SdhRgw@@mS9; bungleanon=sv=BAAAAAD7EQAAAAAAABjFOwAAAAAAAAAAAAAAAACH8iNfcxzZCEAAAACPf3rJHVlQPKCCUm98esFpwyqe67KE8b3J4xtmwBrS5xK5ZhLTDNx4iwZVJ4DGWiaQhWKwM2nw4MTL1aEybVlJ&cl=MC40NjAzLjM5MTcwODA=; bungled=1522920064133889655; bungledid=B7dVOtykPwNEri52bJuKdoCH8iNfcxzZCAAA'
  }
};

// function dataTest(){
//  const promise = axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     return response.data
// })
// .catch(function (error) {
//   console.log(error.response.data);
// });
// }


function dataTest(){
  const promise = axios(config)
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
 .catch(function (error) {
   console.log(error.response.data);
 });
 }


function ApiConnect () {
  return (
    <Fragment >
    
      <p>{dataTest}</p>
    
    </Fragment>
  )
};

export default ApiConnect;