import React, { useState, useEffect } from "react";
import Login from "./Login"
import Data from "./Data"
import data from "./data/data.json"
export default function Search(props) {
  const [drop, setDrop] = useState("Company")
  const [change, setChange] = useState(false)
  const [update, setUpdate] = useState(false)
  const [search, setSearch] = useState("")
  const [searchdata, setSearchdata] = useState([])
  const [level, setLevel] = useState([])
  const [size, setSize] = useState([])
  const [sizeitems, setSizeitems] = useState([])
  const [levelitems, setLevelitems] = useState([])
  const [opacity1, setOpacity1] = useState(1)
  const [status, setStatus] = useState(false)
  const [login, setLogin] = useState(false)
  const [slider2, setSlider2] = useState(false)
  const [slider3, setSlider3] = useState(false)
  const [dataperpage, setDataperpage] = useState(10)
  const [page, setPage] = useState(1)
  const [item, setItem] = useState([])
  const [array, setArray] = useState([])
  // Filter the data as per the selected criteria 
  //Pushing the selected criteria to an array if absent and deleting the element from array if present and then filtering.
  function handleChange(e) {
    setUpdate(true)
    setChange(false)
    console.log(e.target.value)
    if (levelitems.includes(e.target.value)) {
      let index = levelitems.findIndex((ele) => {
        return ele === e.target.value
      })
      levelitems.splice(index, 1)
      setLevelitems(levelitems)
      setArray([...array, e.target.value])
      console.log(levelitems)
    }
    else if (sizeitems.includes(e.target.value)) {
      let index = sizeitems.findIndex((ele) => {
        return ele === e.target.value
      })
      sizeitems.splice(index, 1)
      setSizeitems(sizeitems)
      setArray([...array, e.target.value])
      console.log(sizeitems)
    }
    else {
      if (Number.parseInt(e.target.value) !== Number.parseInt(e.target.value)) {
        setLevelitems([...levelitems, e.target.value])
        setArray([...array, e.target.value])
        console.log(levelitems)
      }
      else {
        setSizeitems([...sizeitems, e.target.value])
        setArray([...array, e.target.value])
        console.log(sizeitems)
      }
    }
  }
  //Functionality to filter the data
  function handleSubmit() {
    let filtered = levelitems.length > 0 ? data.filter((ele) => {
      for (let i of levelitems) {
        if (ele.Level === i) {
          return ele
        }
      }
    }) : []
    let morefilter = sizeitems.length > 0 ? filtered.length > 0 ? filtered.filter((ele) => {
      for (let i of sizeitems) {
        if (ele.Size === Number.parseInt(i)) {
          return ele
        }
      }
    }) : data.filter((ele) => {
      for (let i of sizeitems) {
        if (ele.Size === Number.parseInt(i)) {
          return ele
        }
      }
    }) : [filtered]
    sizeitems.length > 0 ? setItem(morefilter) : setItem(morefilter[0])
  }
  //Filter functionality called through useEffect hook
  useEffect(() => {
    handleSubmit()
  }, [array])
  function handleClick(e) {
    setDrop(e.target.value)
  }
  //Get the search value from the user
  function handleSearch(e) {
    setSearch(e.target.value)
    setChange(true)
    setUpdate(false)
  }
  //Filtering the items based on the dropdown and the input by the user
  function handleFind() {
    let word = (`${drop}`)
    let searched_files = data.filter((ele) => {
      return search === "" ? ele : ele[word].includes(search)
    })
    setSearchdata(searched_files)
  }
  //Functionality of the input Search using useEffect hook.
  useEffect(() => {
    handleFind()
  }, [search])
  //Fetching the data from an Api for different filter options
  async function fetchData() {
    let data = await fetch("https://singaporedb.com/api/v1/sgdb-filter-option-data")
    let parsedData = await data.json()
    setLevel(parsedData.level)
    setSize(parsedData.employee_size)
  }
  function handleLogin() {
    setLogin(true)
    location.pathname = "/login"
  }
  function handleLevelHeight() {
    setSlider2(!slider2)
  }
  function handleSizeHeight() {
    setSlider3(!slider3)
  }
  //Close the sidebar
  function closeBar() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    setOpacity1(1)
    setStatus(true)
  }
  //Open the sidebar
  function openBar() {
    document.getElementById("mySidenav").style.width = "22vw";
    document.getElementById("main").style.marginLeft = "22vw";
    setOpacity1(0)
    setStatus(false)
  }
  //Opening the Navigation bar menu will automatically close the sidebar
  useEffect(() => {
    props.close ? closeBar() : ""
  }, [props.close])
  useEffect(() => {
    fetchData()
  }, [])
  return (
    !login ? <>
      <div id="mySidenav" className="sidenav bg-light">
        <div style={{ display: status === true ? "none" : "block" }}>
          <button className="closebtn btn3" onClick={closeBar}>&times;</button>
          <hr />
          <div className="d-flex profile"><img className="picture mr-1" src="profile.png" alt="profile"></img>
            <div>
              <h6 className="my-auto">Mohit Agarwal</h6>
              <p style={{ fontSize: "13px" }}>mohitagarwal4567@gmail.com</p>
            </div>
            <button style={{ marginTop: "-13px" }} onClick={handleLogin} className="btn5 ml-3">🔽</button></div>
          <hr style={{ marginTop: "-2vh" }}></hr>
          <div className="d-flex item"><i className="fa fa-home mx-3 my-auto"></i><h6 className="my-auto">Search</h6></div>
          <div className="dropdown">
            <button onClick={handleLevelHeight} className=" subitem dropdown-toggle"><i className="fa fa-briefcase mx-3 my-auto"></i>
              Management Level
            </button>
            {slider2 ? <div className="box2">
              {level.map((ele, i) => {
                return (
                  <div className="d-flex" key={i}>
                    <input type="checkbox" onChange={handleChange} value={ele.desc} className="dropdown-item size mx-2 mt-1"></input>
                    <label className="category">{ele.desc}</label>
                  </div>)
              })}
            </div> : ""}
          </div>
          <div className="dropdown">
            <button onClick={handleSizeHeight} className=" subitem dropdown-toggle"><i className="fa fa-users mx-3 my-auto"></i>
              Employee Size
            </button>
            {slider3 ? <div className="box2">
              {size.map((ele, i) => {
                return (
                  <div className="d-flex" key={i}>
                    <input type="checkbox" onChange={handleChange} value={ele.desc} className="dropdown-item size mx-2 mt-1"></input>
                    <label className="category">{ele.desc}</label>
                  </div>)
              })}
            </div> : ""}
          </div>
        </div>
      </div>
      <button className="btn4 mb-3 ml-2" style={{ fontSize: "30px", cursor: "pointer", opacity: opacity1 }} onClick={openBar}>&#9776;</button>
      <div id="main">
        <div className="searchbox">
          <select className="drop text-primary" onChange={handleClick}>
            <option>Company</option>
            <option>Name</option>
            <option>Designation</option>
          </select>
          <input onChange={handleSearch} className="search" placeholder="Search" type="search"></input>
        </div>
        <Data page={page} setPage={setPage} records={dataperpage} setRecords={setDataperpage} searchdata={searchdata} change={change} item={item} update={update} />
      </div>
    </> : <Login />
  )
}