const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Ejemplo Demo DevOps');
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});