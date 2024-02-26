import React from 'react'
import PhotoFrame from '../components/PhotoFrame'

const DigitalPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-radial from-[#5E0D06]/90 to-[#030200]">
      <PhotoFrame src="/images/DSCF7407.jpg" alt="mirror"/>
      <PhotoFrame src="/images/DSCF7722.jpg" alt="garden"/>
      <PhotoFrame src="/images/DSCF7857.jpg" alt="roots"/>
    </div>
  )
}

export default DigitalPage