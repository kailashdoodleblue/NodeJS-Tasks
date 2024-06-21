const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();


const firstservice = 'http://localhost:1001';
const secondService = 'http://localhost:1002';

app.use('/first',createProxyMiddleware({target:firstservice}))
app.use('/second',createProxyMiddleware({target:secondService}))

app.listen(2000,()=>console.log("Running on port 2000"))