import React, { useState, useRef } from 'react'
import MegaMenu from './MegaMenu'
import Contact from '../pages/Contact'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [ContectOpen, setContectOpen] = useState(false)
  const timeoutRef = useRef()

  // open on hover or click
  const handleEnter = ()=> {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleLeave = ()=> {
    // short delay for comfortable hover
    timeoutRef.current = setTimeout(()=> setOpen(false), 60)
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-[rgba(2,10,20,0.36)] backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-extrabold tracking-tight">PORT <span className="text-slate-300 font-semibold">FOLIO</span></div>

          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="relative"
            >
              <button
                onClick={()=> setOpen(o => !o)}
                className="flex items-center gap-1 px-2 py-1 hover:text-white"
              >
                Projects <span className="text-slate-400">▾</span>
              </button>

              {/* Mega menu */}
              {open && <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="absolute left-1/2 -translate-x-1/2 mt-3">
                <MegaMenu />
              </div>}
            </div>
            
            <div className="relative text-slate-300">Certificates <span className="text-slate-400">▾</span></div>
            <a className="text-slate-300 hover:text-white">About Me</a>
            <a className="text-slate-300 hover:text-white">Resources</a>
            <a className="text-slate-300 hover:text-white">Resume</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline px-4 py-2 border rounded-full border-white/10 text-sm">Languages</button>
          <div className='relative'>
            <button className="hidden md:inline px-4 py-2 border rounded-full text-sm border-white/10">Contect Me</button>
            <div className={ContectOpen ? "visible" : "hidden"}><Contact/></div>
          </div>
          <button className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-white">Start to Chat</button>
        </div>
      </div>
    </header>
  )
}
