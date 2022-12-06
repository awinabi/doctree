import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


interface LayoutProps {
    children?: React.ReactElement
}

export default function Layout({ children } : LayoutProps) {
  return (
    <div className='d-flex'>
      <Navbar />

      <main className="p-3 main-content">
        {children}
        <Footer />
      </main>
      
    </div>
  )
}
