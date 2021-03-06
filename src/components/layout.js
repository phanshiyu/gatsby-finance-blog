import React from "react"

import { rhythm } from "../utils/typography"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  
  return (
    <>
    
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
    <Header 
    pathname={ location.pathname } 
    title   ={ title }
    rootPath ={ rootPath } />
      <main>{children}</main>
      <Footer />
    </div>
    </>
  )
}

export default Layout
