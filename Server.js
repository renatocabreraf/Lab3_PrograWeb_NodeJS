const http = require('http')

const port = 8081


http.createServer((req, res) => {
    let urls = req.url.split('/');
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(`{"hello":"${urls[2]}"}`)
}).listen(port)

console.log(`server running at http://localhost:${port}`)