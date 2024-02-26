import React from 'react'
import PhotoFrame from '../components/PhotoFrame'

const FilmPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-radial from-[#5E0D06]/90 to-[#030200]">
      <PhotoFrame src="/images/000003.JPG" alt="trees"/>
      <PhotoFrame src="/images/000014.JPG" alt="sheep"/>
      <PhotoFrame src="/images/000013.JPG" alt="skyline"/>
    </div>
  )
}

export default FilmPage