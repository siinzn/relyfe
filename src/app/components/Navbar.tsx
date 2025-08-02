import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="mt-6 mb-4">
        <div>
          <div className="px-4 sm:px-8 py-4 flex flex-row justify-center items-center gap-4 sm:gap-16">
            <Link 
              href="/" 
              className="relative group px-3 sm:px-6 py-2 rounded-full border border-[#69b4ff]/30 bg-[#0085ff]/10 hover:bg-[#0085ff]/20 transition-all duration-300"
              >
              <h1 className="text-[#69b4ff] font-semibold group-hover:text-[#FFFFFF] transition-colors duration-300 text-sm sm:text-base">
                Relyfe
              </h1>
            </Link>

            <img src="/relyfe.png" className="size-12 sm:size-18"/>
            
            <Link 
              href="/draft-mail" 
              className="relative group px-3 sm:px-6 py-2 rounded-full border border-[#69b4ff]/30 bg-[#0085ff]/10 hover:bg-[#0085ff]/20 transition-all duration-300"
            >
              <span className="text-[#69b4ff] font-semibold group-hover:text-[#FFFFFF] transition-colors duration-300 text-xs sm:text-base">
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