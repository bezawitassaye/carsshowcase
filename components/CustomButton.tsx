import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title,btnType ,containerStyles, textStyles, rightIcon, handleClick}: CustomButtonProps) => {
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

    <span className={`flex-1 ${textStyles}`}>
      {title}
    </span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <img src={rightIcon} alt='right icon' className='object-contain' />
      </div>
    )}

  </button>
  )
}

export default CustomButton
