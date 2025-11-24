import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Garfish from 'garfish';
import './styles.css';

const garfish = new Garfish({
  apps: [
    {
      name: 'react-subapp',
      entry: '/micro-subapp/index.html',
      domGetter: '#subapp-container',
      sandbox: { open: true },
    },
  ],
});

garfish.run();

function App() {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState('子应用未挂载');

  useEffect(() => {
    if (!active) return undefined;

    const mountSubApp = async () => {
      setStatus('加载子应用中...');
      await garfish.loadApp('react-subapp');
      setStatus('子应用已加载');
    };

    mountSubApp();

    return () => {
      setStatus('卸载子应用中...');
      garfish.unmountApp('react-subapp');
      setStatus('子应用未挂载');
    };
  }, [active]);

  return (
    <main className="page">
      <header className="hero">
        <h1>Garfish React Host</h1>
        <p>
          这个 demo 展示了如何在 React 主项目中通过 Garfish 挂载一个独立的 React 子应用。
          子应用以静态 HTML 模板的方式提供，无需单独启动端口。
        </p>
      </header>

      <section className="controls">
        <button type="button" onClick={() => setActive(true)} disabled={active}>
          挂载子应用
        </button>
        <button type="button" onClick={() => setActive(false)} disabled={!active}>
          卸载子应用
        </button>
        <span className="status">{status}</span>
      </section>

      <section className="content">
        <div className="host-card">
          <h2>主应用内容</h2>
          <p>这里是由 Vite + React 构建的宿主应用。</p>
        </div>
        <div className="micro-card">
          <h2>子应用挂载区域</h2>
          <div id="subapp-container" className="subapp-container" />
        </div>
      </section>
    </main>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
