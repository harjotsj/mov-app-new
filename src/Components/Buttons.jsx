import React from 'react'

const Buttons = ({type,style,title}) => {
  return (
    <>
    <button type={type} className={`btn ${style}`}>{title}</button>
    </>
  )
}

export default Buttons