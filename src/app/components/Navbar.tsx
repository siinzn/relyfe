import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="mt-6 mb-4">
        <div>
          <div className="px-8 py-4 flex flex-row justify-center items-center gap-16">
            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-[#0085ff] to-[#69b4ff] bg-clip-text text-transparent group-hover:from-[#69b4ff] group-hover:to-[#0085ff] transition-all duration-300">
                Relyfe
              </h1>
            </Link>

            <img src="/relyfe.png" className=' size-18'/>
            
            {/* Navigation Links */}
            <Link 
              href="/draft-mail" 
              className="relative group px-6 py-2 rounded-full border border-[#69b4ff]/30 bg-[#0085ff]/10 hover:bg-[#0085ff]/20 transition-all duration-300"
            >
              <span className="text-[#69b4ff] font-semibold group-hover:text-[#FFFFFF] transition-colors duration-300">
                Draft Email
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0085ff]/20 to-[#69b4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </nav>
    </MaxWidthWrapper>
  )
}

export default Navbar