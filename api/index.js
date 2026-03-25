/**
 * Vercel Serverless Function - Entry point for the DevOps Demo
 * @param {import('@vercel/node').VercelRequest} req 
 * @param {import('@vercel/node').VercelResponse} res 
 */
export default function handler(req, res) {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps Demo Dashboard | UMES</title>
        <meta name="description" content="Panel de control para demostración de CI/CD y despliegue continuo con Vercel.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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

            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                background-color: var(--bg-dark);
                background-image: 
                    radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 40%),
                    radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.05) 0%, transparent 40%);
                color: var(--text-main);
                font-family: 'Outfit', sans-serif;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow-x: hidden;
            }

            header {
                width: 100%;
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
                animation: fadeInDown 0.8s ease-out;
            }

            .logo {
                font-weight: 800;
                font-size: 1.5rem;
                background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                letter-spacing: -1px;
            }

            .status-badge {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                background: var(--glass-bg);
                padding: 0.5rem 1rem;
                border-radius: 99px;
                border: 1px solid var(--glass-border);
                font-size: 0.875rem;
                font-weight: 600;
            }

            .pulse {
                width: 8px;
                height: 8px;
                background: var(--success);
                border-radius: 50%;
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                animation: pulse-green 2s infinite;
            }

            main {
                flex: 1;
                width: 100%;
                max-width: 1000px;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                gap: 3rem;
                justify-content: center;
            }

            .hero {
                text-align: center;
                animation: fadeInUp 1s ease-out;
            }

            .hero h1 {
                font-size: 4rem;
                font-weight: 800;
                margin-bottom: 1rem;
                background: linear-gradient(to bottom, #fff 40%, rgba(255,255,255,0.7));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                line-height: 1.1;
            }

            .hero p {
                color: var(--text-muted);
                font-size: 1.25rem;
                max-width: 600px;
                margin: 0 auto;
            }

            .cta-section {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
            }

            .btn {
                padding: 0.75rem 1.5rem;
                border-radius: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
            }

            .btn-primary {
                background: var(--accent-primary);
                color: var(--bg-dark);
                border: none;
            }

            .btn-primary:hover {
                background: white;
                transform: translateY(-2px);
                box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
            }

            .btn-outline {
                background: transparent;
                color: white;
                border: 1px solid var(--glass-border);
            }

            .btn-outline:hover {
                background: var(--glass-border);
                transform: translateY(-2px);
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                animation: fadeInUp 1.2s ease-out;
            }

            .card {
                background: var(--glass-bg);
                backdrop-filter: blur(12px);
                border: 1px solid var(--glass-border);
                padding: 1.5rem;
                border-radius: 20px;
                transition: all 0.3s ease;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .card:hover {
                border-color: var(--accent-primary);
                transform: scale(1.02);
                box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
            }

            .card-icon {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }

            .card h3 {
                font-size: 1.25rem;
                font-weight: 600;
            }

            .card p {
                color: var(--text-muted);
                font-size: 0.95rem;
                line-height: 1.5;
            }

            code {
                font-family: 'JetBrains Mono', monospace;
                background: rgba(0,0,0,0.3);
                padding: 0.2rem 0.4rem;
                border-radius: 4px;
                color: var(--accent-primary);
            }

            footer {
                padding: 3rem;
                text-align: center;
                color: var(--text-muted);
                font-size: 0.875rem;
                border-top: 1px solid var(--glass-border);
                width: 100%;
                margin-top: auto;
            }

            @keyframes pulse-green {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }

            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @media (max-width: 768px) {
                .hero h1 { font-size: 2.5rem; }
                .grid { grid-template-columns: 1fr; }
            }
        </style>
    </head>
    <body>
        <header>
            <div class="logo">DEMO.DEV</div>
            <div class="status-badge">
                <div class="pulse"></div>
                SISTEMA OPERATIVO
            </div>
        </header>

        <main>
            <section class="hero">
                <h1>daniel manco</h1>
                <p>Pipeline de Despliegue Continuo (CI/CD) para la Unidad II. Desarrollado como ejemplo para control de versiones y automatización.</p>
                <div class="cta-section">
                    <a href="#" class="btn btn-primary">Ver Documentación</a>
                    <a href="https://github.com" target="_blank" class="btn btn-outline">Repositorio Git</a>
                </div>
            </section>

            <section class="grid">
                <div class="card">
                    <div class="card-icon">🚀</div>
                    <h3>Despliegue Vercel</h3>
                    <p>Conectado automáticamente mediante <br><code>api/index.js</code> como handler principal para funciones serverless.</p>
                </div>
                <div class="card">
                    <div class="card-icon">⚡</div>
                    <h3>CI/CD Activo</h3>
                    <p>Configurado con GitHub Actions para validar cada <code>push</code> y <code>pull request</code> en el repositorio.</p>
                </div>
                <div class="card">
                    <div class="card-icon">🛠️</div>
                    <h3>DevOps Workflow</h3>
                    <p>Integración de herramientas modernas para asegurar la calidad y estabilidad del software en tiempo real.</p>
                </div>
            </section>
        </main>

        <footer>
            &copy; 2026 UMES - Facultad de Ingeniería | Demo DevOps 1.5
        </footer>
    </body>
    </html>
    `;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}