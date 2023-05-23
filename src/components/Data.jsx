import React, { useState } from "react"
import data from "./data/data.json"
export default function Data(props) {
  //Goto selected page
  function handleClick1(i) {
    props.setPage(i + 1)
  }
  //Goto previous page
  function handleprev() {
    props.setPage(props.page - 1)
  }
  //GOto next page
  function handlenext() {
    props.setPage(props.page + 1)
  }
  //Get table headers using keys of Object
  const column = Object.keys(data[0]).slice(1)
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>
    })
  }
  //Retriving data as per search criteria
  return (
    <>
      <div className="contain">
        <table className="table">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>
            {!props.change ? !props.update ? data.slice(props.page * props.records - props.records, props.page * props.records).map((ele, i) => {
              return (
                <tr key={i}>
                  <td><img className="pic" src={ele.Image} alt="profile"></img>{ele.Name}</td>
                  <td>{ele.Designation}</td>
                  <td>{ele.Company}</td>
                  <td>{ele.Size}</td>
                  <td>{ele.Level}</td>
                </tr>
              )
            }) : props.item.slice(props.page * props.records - props.records, props.page * props.records).map((ele, i) => {
              return (
                <tr key={i}>
                  <td><img className="pic" src={ele.Image} alt="profile"></img>{ele.Name}</td>
                  <td>{ele.Designation}</td>
                  <td>{ele.Company}</td>
                  <td>{ele.Size}</td>
                  <td>{ele.Level}</td>
                </tr>
              )
            }) : props.searchdata.slice(props.page * props.records - props.records, props.page * props.records).map((ele, i) => {
              return (
                <tr key={i}>
                  <td><img className="pic" src={ele.Image} alt="profile"></img>{ele.Name}</td>
                  <td>{ele.Designation}</td>
                  <td>{ele.Company}</td>
                  <td>{ele.Size}</td>
                  <td>{ele.Level}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <button onClick={handleprev} disabled={props.page === 1 ? true : false} className="btn7">⬅️</button>
        {
          [...Array(data.length / props.records)].map((_, i) => {
            return (
              <button onClick={() => { handleClick1(i) }} className={props.page === i + 1 ? "yes btn6" : "btn6"} key={i}>{i + 1}</button>
            )
          })}
        <button onClick={handlenext} disabled={props.page === (data.length / props.records) ? true : false} className="btn7">➡️</button>
      </div>
    </>
  )
}