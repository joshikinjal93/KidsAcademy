import React from 'react'
import Banner from '../Banner'
import Class from '../Class'
import Subscribe from '../Subscribe'


function Classes() {
  return (
    <>
    <Banner props={{heading:"Our Popular Classes", page:"Classes"}}/>
    <Class/>
    <Subscribe/>
    </>
  )
}

export default Classes