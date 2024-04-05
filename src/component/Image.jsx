import React from 'react'

export default function Image(props) {
  return (
    <>
      <div className={props.className}>
            <img src={props.imageUrl} alt={props.alt} />
      </div>
    </>
  )
}
