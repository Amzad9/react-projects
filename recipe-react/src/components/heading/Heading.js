import React from 'react'

function Heading({level, headingSection, creditText}) {
  const Tag = "h" + level;
  return (
    <>
    <p className='font-medium text-gray-600'>{creditText}</p>
    <Tag className='text-3xl text-gray-900 font-Poppins font-extrabold capitalize mb-4'>{headingSection}</Tag>
    </>
  )
}

export default Heading