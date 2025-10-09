import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'
const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-width flex-between padding-x padding-y'>
        {/* Fallback classes from globals.css so layout works even if some Tailwind utilities are missing */}
        <Link href="/" className='flex justify-center items-center '>
          {/* Use a plain img as a quick test to ensure the logo loads */}
          <img src="/logo.svg" alt="Logo" width={118} height={18} style={{ objectFit: 'contain' }} />

        </Link>

        <CustomButton title='Sign In' btnType='button' containerStyles='text-primary rounded-full bg-white min-w-[130px]'/>

      </nav>
    </header>
  )
}

export default Navbar
