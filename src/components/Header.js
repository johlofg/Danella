import React from 'react'

import Hamburger from './Hamburger'
import Logo from './Logo'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Hamburger />
    </div>
  )
}

export default Header