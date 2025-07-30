"use client"
import Gradient from "./components/Gradient";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MaxWidthWrapper className="flex-1 flex flex-col">
          <Gradient/>
          <div className="flex flex-col justify-center items-center text-center flex-1 px-4 py-4">
                     
          {/* Main Heading */}
          <div className="mb-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Send Emails <span className="text-[#0085ff] bg-gradient-to-r from-[#0085ff] to-[#69b4ff] bg-clip-text">Anonymously</span>
            </h1>
          </div>
           
          {/* Subtitle Section */}
          <div className="mb-7 max-w-5xl">
            <div className="bg-[#F8F9FA]/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
              <p className="text-lg md:text-xl font-medium text-[#F8F9FA] leading-relaxed">
                Relyfe lets you send emails without revealing your identity
              </p>
              <h2 className="text-[#FFFFFF] font-bold text-2xl md:text-2xl mt-3 leading-tight">
                instantly or <span className="text-[#69b4ff]">scheduled for later</span>.
              </h2>
              <p className="text-[#9e9e9e] text-sm pt-3"> No registration required • Completely anonymous • Secure delivery</p>
            </div>
          </div>
           
          {/* Features Section */}
          <div className="mb-8 max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="bg-[#0085ff]/10 border border-[#0085ff]/30 rounded-full px-4 py-2">
                  <h3 className="text-[#69b4ff] text-base font-semibold">⚡ Send it now</h3>
                </div>
                <div className="text-[#9e9e9e] text-xl font-light">or</div>
                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full px-4 py-2">
                  <h3 className="text-[#FF6B35] text-base font-semibold">📅 Schedule delivery</h3>
                </div>
              </div>
                             
              <div className="relative mt-5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0085ff]/20 to-[#FF6B35]/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-[#1E1E1E]/80 backdrop-blur-sm border border-[#69b4ff]/30 rounded-2xl p-3 shadow-2xl">
                  <h2 className="text-[#69b4ff] text-3xl md:text-3xl font-bold leading-tight">
                    All fully <span className="bg-gradient-to-r from-[#69b4ff] to-[#0085ff] bg-clip-text text-transparent">anonymous</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
           
          {/* CTA Button */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FFD700] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <button
              className="relative px-10 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8500] text-[#1E1E1E] font-bold text-lg rounded-xl hover:from-[#FF5722] hover:to-[#FF6B35] transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl hover:shadow-[#FF6B35]/25 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
              onClick={() => router.push('/draft-mail')}
            >
              <span className="flex items-center gap-3">
                🚀 Try It Now
              </span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-4 mt-auto">
          <div className="text-center">
            <p className="text-[#9e9e9e] font-medium">
              <span className="text-[#69b4ff]">✨</span> Your secrets are safe with us <span className="text-[#69b4ff]">✨</span>
            </p>
          </div>
        </footer>
        </MaxWidthWrapper>
      </div>
    </>
  );
}