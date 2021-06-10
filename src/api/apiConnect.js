import axios from 'axios';
import React from 'react';

var config = {
  method: 'get',
  url: 'https://www.bungie.net/Platform/Trending/Categories/',
  headers: { 
    'X-API-Key': '081a57e392444e60949b849d3a1d27e0', 
    'Cookie': 'Q6dA7j3mn3WPBQVV6Frr5izQXv0q+I9ddZfGro+PognXQwjW=v1SdhRgw@@mS9; bungleanon=sv=BAAAAAD7EQAAAAAAABjFOwAAAAAAAAAAAAAAAACH8iNfcxzZCEAAAACPf3rJHVlQPKCCUm98esFpwyqe67KE8b3J4xtmwBrS5xK5ZhLTDNx4iwZVJ4DGWiaQhWKwM2nw4MTL1aEybVlJ&cl=MC40NjAzLjM5MTcwODA=; bungled=1522920064133889655; bungledid=B7dVOtykPwNEri52bJuKdoCH8iNfcxzZCAAA'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// var apiKey = "2ec1e1f4d20a48a69b14c8bbca315d39";

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);

// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
//  }
// }

// xhr.send();

function ApiConnect () {
  return (
    <div> 
      <p>Hello</p>
    </div>
  )
  
};

export default ApiConnect;

// var config = {
//   method: 'get',
//   url: 'https://www.bungie.net/Platform/Trending/Categories/',
//   headers: { 
//     'X-API-Key': '081a57e392444e60949b849d3a1d27e0', 
//     'Cookie': 'Q6dA7j3mn3WPBQVV6Frr5izQXv0q+I9ddZfGro+PognXQwjW=v1SdhRgw@@mS9; bungleanon=sv=BAAAAAD7EQAAAAAAABjFOwAAAAAAAAAAAAAAAACH8iNfcxzZCEAAAACPf3rJHVlQPKCCUm98esFpwyqe67KE8b3J4xtmwBrS5xK5ZhLTDNx4iwZVJ4DGWiaQhWKwM2nw4MTL1aEybVlJ&cl=MC40NjAzLjM5MTcwODA=; bungled=1522920064133889655; bungledid=B7dVOtykPwNEri52bJuKdoCH8iNfcxzZCAAA'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });