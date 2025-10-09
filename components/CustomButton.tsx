import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title,btnType ,containerStyles, handleClick}: CustomButtonProps) => {
  return (
  <button 
    disabled={false}
    type={btnType}
    className={`${containerStyles} custom-btn`}
    onClick={handleClick}
  >

    <span className={'flex-1'}>
      {title}
    </span>

  </button>
  )
}

export default CustomButton
