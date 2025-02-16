import React from 'react'

const CheckBox = ({htmlFor,labelText,id,name}) => {
  return (
    <div className='flex  items-center gap-2'>
    <input name={name} id={id} type="radio" className='md:w-6 w-4 h-4  md:h-6 appearance-none relative bg-white rounded-full after:absolute after:content-[""] md:after:w-[15px] md:after:h-[15px] after:w-[10px] after:h-[10px] after:bg-[#E1E1E5] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full checked:after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100%' />
    <label htmlFor={htmlFor} className='font-OS text-white text-[18px] md:text-[24px]'>{labelText}</label>
    </div>
  )
}

export default CheckBox