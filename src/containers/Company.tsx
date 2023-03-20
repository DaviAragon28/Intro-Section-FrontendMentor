import React from 'react'
import { ListToShow } from './ListToShow'

export const Company = ({ show, header } : {show: boolean, header: boolean}) => {
  return (
    <ListToShow classname={`${header && 'absolute shadow-2xl px-4 py-5 -ml-0 z-40  mt-2 mr-10 rounded-md'}`} show={show}>
        <span className='text-mediumGray hover:text-almostBlack cursor-pointer'>History</span>
        <span className='text-mediumGray hover:text-almostBlack cursor-pointer'>Our Team</span>
        <span className='text-mediumGray hover:text-almostBlack cursor-pointer'>Blog</span>
    </ListToShow>
  )
}
