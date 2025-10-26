import React from 'react'
import Header from './Header'
import '../styles/layout.scss'

const Layout = ({ children }) => {
  return (
    <>
       <div className="header-container"> <Header/></div>
        <main>{children}</main>    
    </>
  )
}

export default Layout
