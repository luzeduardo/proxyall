const express = require('express');
const path = require('path');
const app = express();
var proxy = require('express-http-proxy');

// app.use('/search-rewrite-header', proxy('https://google.com',{
//   timeout: 30000,
//   decorateRequest: function(proxyReq, originalReq) {
//     if(typeof originalReq.headers['x-http-method-override'] !== 'undefined'){
//       proxyReq.method = originalReq.headers['x-http-method-override'];
//     }
//     return proxyReq;
//   }
// }));

app.use('/searchgithub', proxy('https://github.com/search',{
  timeout: 20000
}));

app.listen(9009);
console.log('Listen to them. Children of the night. What music they make');
