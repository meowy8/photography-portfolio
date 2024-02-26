import Link from 'next/link'
import React from 'react'

const SiteTitle = () => {
  return (
    <div className='flex text-3xl text-[#C2C04C] font-light p-4 drop-shadow-xl hover:text-white hover:opacity-0 transition-opacity duration-300'>
      <Link href={"/"}>michealhoey</Link>
    </div>
  )
}

export default SiteTitle