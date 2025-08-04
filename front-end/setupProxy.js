

// import { createProxyMiddleware } from 'http-proxy-middleware';

// export default function(app) {
//   app.use(
//     createProxyMiddleware('/api', )
    // '/api',
    // createProxyMiddleware({
    //   target: "http://localhost:3003",
    //   changeOrigin: true,
//     })
//   );
// }

const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api',
    {target: "http://localhost:3003",
      changeOrigin: true,
    }
  ))
}