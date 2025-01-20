import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({className,src}) => {
  return (
    <li className={` w-20 h-20 flex justify-center hover: items-center relative after:absolute after:content-[""] after:w-full after:h-full after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% after:top-0 after:left-0 z-10 after:-z-10 after:opacity-0 hover:after:opacity-100 after:duration-300  after:cursor-pointer !transition-all after:border   after:rounded-[10px] ${className}`}>
        <NavLink >
            <img  src={src} alt="" />
        </NavLink>
    </li>
  )
}

export default Li