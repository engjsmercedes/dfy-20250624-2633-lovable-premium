import React from 'react'
import './App.css'
import Layout from './components/Layout'
import FeatureShowcase from './components/FeatureShowcase'

function App() {
  return (
    <Layout>
      <div className="hero-section">
        <h1>Welcome to Your Premium Project</h1>
        <p className="subtitle">Order DFY-20250624-2633 • Basic Tier</p>
        <p className="description">
          This is your custom-built application created by Lovable's premium build service.
          Built with React, TypeScript, and modern web technologies.
        </p>
        <div className="ownership-badge">
          <p className="text-sm bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
            🎉 <strong>This repository is yours!</strong> You have full ownership and control.
          </p>
        </div>
      </div>
      
      <FeatureShowcase />
      
      <div className="getting-started">
        <h2>🚀 Getting Started</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Clone & Setup</h3>
            <p>Clone this repository and run <code>npm install</code> to get started.</p>
          </div>
          <div className="step">
            <h3>2. Customize</h3>
            <p>Modify components, styles, and features to match your vision.</p>
          </div>
          <div className="step">
            <h3>3. Deploy</h3>
            <p>Deploy to Vercel, Netlify, or your preferred hosting service.</p>
          </div>
        </div>
      </div>
      
      <div className="support-section">
        <h2>💬 Need Help?</h2>
        <p>Your premium support is active.</p>
        <p>Contact us at <a href="mailto:support@lovable.dev">support@lovable.dev</a> with order #{order.order_number}</p>
      </div>
    </Layout>
  )
}

export default App
