import './App.css'
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Search from "./components/Search"
import Contact from "./components/Contact"
import Pricing from "./components/Pricing"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  const [close, setClose] = useState(false)
  return (
    <>
      <Router>
        <Navbar close={close} setClose={setClose} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/search' element={<Search close={close} setClose={setClose} />}></Route>
          <Route exact path='/pricing' element={<Pricing />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}
