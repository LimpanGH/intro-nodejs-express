const http = require("http") //Common.js modul-sättet

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {

        if(request.method === 'GET' && request.url === '/') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify({message: 'Hello from server!'}));
            response.end();
        return; 
           }
        else {
            response.writeHead(404, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message: 'Route not found'}));
        }

})

server.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
})
