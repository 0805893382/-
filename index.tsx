
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const init = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("Root element not found");
    return;
  }

  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Fatal: React Render Error", err);
  }
};

// 스크립트 로드 시점에 즉시 실행 또는 DOM 대기
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
