// phase-1/day-4/day4.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  const lang = req.url.includes('hindi') ? 'hindi' : 'english';
  const message = lang === 'hindi' ? 'हेलो, वर्ल्ड!\n' : 'Hello, World!\n';
  res.end(message);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});