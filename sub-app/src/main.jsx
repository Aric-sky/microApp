import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function SubApp() {
  return (
    <div className="subapp">
      <h3>React 子应用</h3>
      <p>
        这是由 Garfish 动态加载的 React 子应用。它可以独立开发、独立部署，与宿主应用保持技术栈一致。
      </p>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SubApp />);
