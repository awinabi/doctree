import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface NavLink {
  url: string,
  title: string
}

interface LayoutProps {
    children?: React.ReactElement,
    // links: NavLink[]
}


export default function Layout({ children } : LayoutProps) {
  return (
    <div className='d-flex'>
      <Navbar />

      <main className="p-3 main-content">
        {children}
      </main>
      
    </div>
  )
}
