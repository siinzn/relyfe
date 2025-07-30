"use client"
import Gradient from "./components/Gradient";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <MaxWidthWrapper>
        <Gradient/>
        <div className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4">
          
          {/* Main Heading */}
          <div className="mb-5">
            <h1 className="text-6xl md:text-6xl font-bold">
              Send Emails <span className="bg-gradient-to-r from-[#69b4ff] to-[#0085ff] bg-clip-text text-transparent">Anonymously</span>
            </h1>
          </div>

          {/* Subtitle Section */}
          <div className="mb-7 max-w-3xl">
            <div className="bg-[#F8F9FA]/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
              <p className="text-xl md:text-2xl font-medium text-[#F8F9FA] leading-relaxed">
                Relyfe lets you send emails without revealing your identity
              </p>
              <h2 className="text-[#FFFFFF] font-bold text-3xl md:text-3xl mt-4 leading-tight">
                instantly or <span className="text-[#69b4ff]">scheduled for later</span>.
              </h2>
              <p className="text-[#9e9e9e] text-sm pt-3"> No registration required • Completely anonymous • Secure delivery</p>

            </div>
          </div>

          {/* Features Section */}
          <div className="mb-8 max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-[#0085ff]/10 border border-[#0085ff]/30 rounded-full px-6 py-3">
                  <h3 className="text-[#69b4ff] text-lg font-semibold">⚡ Send it now</h3>
                </div>
                <div className="text-[#9e9e9e] text-2xl font-light">or</div>
                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full px-6 py-3">
                  <h3 className="text-[#FF6B35] text-lg font-semibold">📅 Schedule delivery</h3>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute bg-gradient-to-r from-[#0085ff]/20 to-[#FF6B35]/20 rounded-2xl blur-xl"></div>
                <div className="bg-[#F8F9FA]/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-xl">
                  <h2 className="text-[#69b4ff] text-2xl md:text-2xl font-bold">
                    All fully <span className="bg-gradient-to-r from-[#69b4ff] to-[#0085ff] bg-clip-text text-transparent">anonymous</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-[#FFD700] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <button
              className="relative px-12 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8500] text-[#1E1E1E] font-bold text-xl rounded-xl hover:from-[#FF5722] hover:to-[#FF6B35] transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl hover:shadow-[#FF6B35]/25 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
              onClick={() => router.push('/draft-mail')}
            >
              <span className="flex items-center gap-3">
                🚀 Try It Now
              </span>
            </button>
          </div>

          {/* Footer Text */}
          <div className="mt-5 opacity-70">
            <p className="text-[#9e9e9e] font-medium">
              <span className="text-[#69b4ff]">✨</span> Your secrets are safe with us <span className="text-[#69b4ff]">✨</span>
            </p>
          </div>

        </div>
      </MaxWidthWrapper>
    </>
  );
}