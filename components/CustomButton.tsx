import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title,btnType ,containerStyles, handleClick}: CustomButtonProps) => {
  return (
  <button 
    disabled={false}
    type={btnType}
    // Put containerStyles after custom-btn so callers can override defaults
    className={`custom-btn ${containerStyles ?? ''}`}
    // Inline fallback to guarantee correct color/background until Tailwind ordering is resolved
    style={{ background: '#2B59FF', color: '#FFFFFF' }}
    onClick={handleClick}
  >

    <span className={'flex-1'}>
      {title}
    </span>

  </button>
  )
}

export default CustomButton
