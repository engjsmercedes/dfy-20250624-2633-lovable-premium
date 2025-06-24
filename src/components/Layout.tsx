import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="container">
          <div className="logo">
            <h1>Premium Project</h1>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>
      
      <main className="app-main">
        <div className="container">
          {children}
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Premium Lovable Project. Built with ❤️ by Lovable.</p>
          <p className="text-sm">This repository is owned by you - customize and deploy as you wish!</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
