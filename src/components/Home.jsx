import React, { useState } from "react"
import Search from "./Search"
export default function Home() {
  const [status, setStatus] = useState(false)
  function handleClick() {
    setStatus(true)
  }
  return (
    !status ? <>
      <div id="home">
        <div className="filter"></div>
        <section className="intro">
          <button className="btn1">A DATABASE COMPANY</button>
          <h1><strong>Welcome to the world of</strong></h1>
          <h1><strong>HR professionals</strong></h1>
          <h1 className="setting"><strong>database</strong></h1>
          <p className="para">We provide verified, validated, upto date and live contact database.</p>
          <p className="para"> As the contact data are getting obsolete over period, regular verification</p>
          <p className="para">become imperative</p>
          <p className="para">to keep the records upto date</p>
          <button onClick={handleClick} className="btn2"><strong>LETS START</strong></button>
        </section>
      </div>
    </> : <Search />
  )
}