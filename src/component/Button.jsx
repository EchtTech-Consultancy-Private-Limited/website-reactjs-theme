import React from 'react'

export default function Butotn(props) {

  let style = {
    backgroundColor:"red",  backgroundColor: "#FE5000",
    border: "none",
    padding: "9px 26px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700"
  }
  return (
    <>
       <a href={props.url} style={style} className={props.className}>{props.value}</a>
    </>
  )
}
