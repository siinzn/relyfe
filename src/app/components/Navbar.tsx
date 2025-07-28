import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <MaxWidthWrapper>
    <div className='mt-8 p-8 flex flex-row justify-center gap-[100px]'>
      <Link href="/" className='font-manRope font-bold text-[#FFFFFF]'>Relyfe</Link>
      <Link href="/draft-mail" className='font-manRope font-bold text-[#FFFFFF] '>Draft Email</Link>
    </div>
    </MaxWidthWrapper>
  )
}

export default Navbar