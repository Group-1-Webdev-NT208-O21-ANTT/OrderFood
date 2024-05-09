import React from 'react'

const copyrightSymbol = '\u00A9';
const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4 '>
       <p className='text-center font-bold' title="Youtube Channel">Copyright{copyrightSymbol} 2024 - Bản quyền thuộc về nhóm 1</p>
      </div>
    </footer>
  )
}


export default Footer