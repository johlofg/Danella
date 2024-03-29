import React, { useState } from 'react'
import styled from 'styled-components'

import RightNav from './RightNav'

const HamburgerMenu = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
// top: 15px;
bottom: 0;
right: 20px;
z-index: 20;
display: none; 
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  background-color: #a9a9a9;
  padding: 10px;
  border-radius: 50%;
}
div {  
  width: 32px;
  height: 4px;
  background-color: ${({ open }) => (open ? '#fff' : '#fff')};  
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};    
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')}; 
    opacity:   ${({ open }) => (open ? 0 : 1)};  
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};    
  }  
}`
const Hamburger = () => {
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      {open && <RightNav open={open} />}
    </>
  )
}

export default Hamburger
