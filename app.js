const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Demo Dashboard | UMES</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #0f172a;
            --accent-primary: #38bdf8;
            --accent-secondary: #818cf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --glass-bg: rgba(30, 41, 59, 0.7);
            --glass-border: rgba(255, 255, 255, 0.1);
            --success: #22c55e;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            font-family: 'Outfit', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header { width: 100%; padding: 2rem; max-width: 1200px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-weight: 800; font-size: 1.5rem; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        main { flex: 1; width: 100%; max-width: 1000px; padding: 2rem; display: flex; flex-direction: column; gap: 3rem; justify-content: center; text-align: center; }
        h1 { font-size: 4rem; font-weight: 800; margin-bottom: 1rem; }
        p { color: var(--text-muted); font-size: 1.25rem; }
        .status-badge { display: flex; align-items: center; gap: 0.5rem; background: var(--glass-bg); padding: 0.5rem 1rem; border-radius: 99px; border: 1px solid var(--glass-border); font-size: 0.875rem; }
        .pulse { width: 8px; height: 8px; background: var(--success); border-radius: 50%; }
        .card { background: var(--glass-bg); padding: 1.5rem; border-radius: 20px; border: 1px solid var(--glass-border); margin-top: 2rem; }
    </style>
</head>
<body>
    <header>
        <div class="logo">DEMO.DEV [LOCAL]</div>
        <div class="status-badge"><div class="pulse"></div> EN LINEA</div>
    </header>
    <main>
        <h1>Ingeniería de Software II</h1>
        <p>Desarrollo y Operaciones (DevOps) - Local Environment</p>
        <div class="card">
            <h3>Estado del Servidor</h3>
            <p>Servidor corriendo en el puerto 3000</p>
        </div>
    </main>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(html);
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});