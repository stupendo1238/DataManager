import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  function handleClick() {
    props.close === false ? props.setClose(true) : props.setClose(false)
  }
  let location = useLocation()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div>
        <a className="navbar-brand" href="/"><strong style={{ fontSize: "24px" }}>HR Leads</strong></a>
      </div>
      <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mt-1 box" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item "><Link className="nav-link text-white" to="/search">SEARCH</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/pricing">PRICING</Link></li>
          <li className="nav-item mr-2"><Link className="nav-link text-white" to="/contact">CONTACT</Link></li>
          <li className="nav-item mr-2"><Link className="nav-link text-white" to="/login">LOGIN</Link></li>
          <li className="nav-item mr-2"><Link className="nav-link text-white" to="/signup">SIGN UP</Link></li>
          <li className="nav-item mr-1"><Link className="nav-link text-white" to="/home"><img className="mr-1 mb-1" src="sg.png" height="16" width="26" alt="map"></img>{location.pathname !== "/search" ? "SINGAPORE" : "HOME"}</Link></li>
        </ul>
      </div>
    </nav>
  )
}




