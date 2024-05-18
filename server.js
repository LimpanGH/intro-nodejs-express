// Det här är en vanilla version utan Express eller andra ramverk.

// Vi gjorde en npm init för att få en package.json-fil men det var visst onödigt
// för det mesta vi behövde finns redan i node.js.

const http = require('http'); //Common.js modul-sättet

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Hello from server!' }));
    res.end();
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

// I you run node server.json in the terminal and go to http://localhost:3000/ in the browser, you should see:
// 20240514110945
// http://localhost:3000/
//
// {
//     "message": "Hello from server!"
//   }
