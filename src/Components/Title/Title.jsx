import React from 'react'

const Title = (props) => {
  return (
    <p id={props.id} className='text-3xl text-center font-IranSansBolddn text-white my-12'>{props.title}</p>
  )
}

export default Title