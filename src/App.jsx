import { useState } from 'react'
import { INDUSTRIES, getIndustry } from './data/index.js'
import Dashboard from './components/Dashboard.jsx'
import './App.css'

export default function App() {
  const [activeId, setActiveId] = useState('semiconductors')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')

  const industry = getIndustry(activeId) || INDUSTRIES[0]

  return <>
    {/* Mobile hamburger */}
    <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
      <span/><span/><span/>
    </button>

    {/* Sidebar overlay for mobile */}
    {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}/>}

    {/* Sidebar */}
    <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="mono" style={{fontSize:14,fontWeight:700,color:'var(--t1)',letterSpacing:'-0.02em'}}>SCIQ</div>
        <div style={{fontSize:9,color:'var(--t4)',marginTop:2}}>Supply Chain Intelligence</div>
      </div>
      <div style={{fontSize:8,color:'var(--t5)',textTransform:'uppercase',letterSpacing:'0.08em',padding:'0 16px',marginBottom:6}}>Industries</div>
      {INDUSTRIES.map(ind => (
        <div
          key={ind.id}
          className={`sidebar-item ${activeId === ind.id ? 'active' : ''} ${ind.comingSoon ? 'disabled' : ''}`}
          onClick={() => {
            if (!ind.comingSoon) {
              setActiveId(ind.id)
              setSidebarOpen(false)
            }
          }}
        >
          <span style={{fontSize:16}}>{ind.icon}</span>
          <span>{ind.name}</span>
          {ind.comingSoon && <span style={{fontSize:8,color:'var(--t5)',marginLeft:'auto'}}>SOON</span>}
        </div>
      ))}
    </nav>

    {/* Top bar */}
    <header className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span style={{fontSize:14}}>{industry.icon}</span>
        <span className="mono" style={{fontSize:12,fontWeight:600,color:'var(--t2)'}}>{industry.name}</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <input
          type="text"
          className="topbar-search"
          placeholder="Search companies..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </header>

    {/* Main content */}
    <main className="main-content">
      <Dashboard industry={industry} liveData={null} />
    </main>
  </>
}
