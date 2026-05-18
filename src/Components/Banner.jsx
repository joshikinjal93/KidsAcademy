import React from 'react'
import { Link } from 'react-router-dom'

function Banner({props}) {
  return (
    <>
    <section id="Banner">
        <h1 className='fw-bold'>
          {props.heading}
        </h1>
        <div className='link'>
          <Link to={'/'} className='text-white'>Home</Link> - {props.page}  
        </div>
    </section>
    
    </>
  )
}

export default Banner