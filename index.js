'use strict';
const http = require('http');
const fs = require('fs');
const fileName = './index.html';
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
    '<!DOCTYPE html><html lang="ja"><h1>HTMLで一番大きな見出しになります</h1></html>'
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
