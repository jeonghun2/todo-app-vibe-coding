import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Todo 애플리케이션</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2025 Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;