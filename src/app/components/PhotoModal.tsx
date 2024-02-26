import React from 'react'
import PhotoFrame from './PhotoFrame'
import Image from 'next/image'

const PhotoModal = () => {
  return (
    <div className='absolute h-screen backdrop-blur-sm'>
      <Image src="/images/DSCF7407.jpg" alt="mirror" width={600} height={600}/>
    </div>
  )
}

export default PhotoModal