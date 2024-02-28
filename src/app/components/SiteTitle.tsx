import Link from 'next/link'
import React from 'react'

const SiteTitle = () => {
  return (
    <div className={`flex text-3xl text-[#C2C04C] dmSerifDisplay p-4 drop-shadow-xl hover:text-white transition-color duration-500 `}>
      <Link href={"/"}>michealhoey</Link>
    </div>
  )
}

export default SiteTitle