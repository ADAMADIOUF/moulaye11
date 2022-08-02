import React, { useState,useRef,useEffect } from 'react'
import { links } from './data'
import {FaBars} from "react-icons/fa"
export default function Navbar() {
  const[data,setData]= useState(links)
  const[showNavbar,setShowNavbar]= useState(false)
  const linksRef = useRef(null)
  const linkContainerRef = useRef(null)
  const toggleLinks = () =>{
    setShowNavbar(!showNavbar)
  }
  useEffect(()=>{
const linksHeight = linksRef.current.getBoundingClientRect().height
if(showNavbar){
  linkContainerRef.current.style.height = `${linksHeight}px`
}else{
  linkContainerRef.current.style.height = `0px`
}
  },[showNavbar])
  return (
    <nav className='navbar'>
<div className="nav-center">
  <div className="nav-header">
    <h3 className="logo">kappee</h3>
    <button className="btn-toggle" onClick={toggleLinks}>
<FaBars/>
    </button>
  </div>
  <div className="container-links" ref={linkContainerRef}>
    <ul className="links" ref={linksRef}>
      {data.map((link)=>{
        const{id,url,text}= link
        return(
          <li key={id}>
            <a href={url}>
{text}
            </a>
          </li>
        )
      })}
    </ul>
  </div>
</div>
    </nav>
  )
}
