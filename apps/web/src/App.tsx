import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Bundle: Knowledge</h1>
                <p className="tagline">Knowledge management bundle — documents, concepts, citations</p>
                <div className="cta-buttons">
                    <a href="https://docs.minions.wtf" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-bundles-knowledge" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @mxn2020/minions-bundles-knowledge-sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-bundles-knowledge</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @mxn2020/minions-bundles-knowledge-cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
