"use client"
import Gradient from "./components/Gradient";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <MaxWidthWrapper>
        <Gradient />
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-16 py-6 sm:py-10 lg:py-24 px-4 sm:px-0">
          {/* Left Side */}
          <div className="flex flex-col justify-center items-start w-full lg:w-1/2 text-white px-2 sm:px-4 lg:px-8 -mt-4 sm:-mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 sm:mb-8 text-center sm:text-left">
              Send Emails <span className="font-bold text-blue-700">Anonymously</span>
            </h1>
                     
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 flex-wrap w-full">
              <div className="bg-gray-600/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 shadow-lg backdrop-blur-sm hover:bg-gray-600/20 transition">
                <span className="text-sm md:text-base font-medium">Send it now</span>
              </div>
              <span className="text-white/70 text-sm md:text-base">or</span>
              <div className="bg-gray-600/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 shadow-lg backdrop-blur-sm hover:bg-gray-600/20 transition">
                <span className="text-sm md:text-base font-medium">Schedule delivery</span>
              </div>
            </div>
                   
            <div className="flex flex-col justify-center items-center text-white px-2 sm:px-4 mt-5 w-full sm:-ml-13">
              <button
                onClick={() => router.push('/draft-mail')}
                className="bg-amber-600 hover:bg-amber-700 px-8 sm:px-12 py-3 sm:py-4 rounded-2xl cursor-pointer shadow-xl hover:shadow-amber-800/100 hover:shadow-2xl transform hover:scale-105 transition-all ease-out duration-200 w-full sm:w-auto"
              >
                <span className="font-bold text-base sm:text-lg">Try It Now</span>
              </button>
                     
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-200/80 text-center max-w-md px-4 sm:px-0">
                No registration required • Completely anonymous • Secure delivery
              </p>
            </div>
          </div>
           
          {/* Right Side */}
          <div className="flex flex-col justify-center items-start w-full lg:w-1/2 text-white px-2 sm:px-4 lg:px-8 bg-gray-600/10 py-4 sm:py-7 rounded-xl border border-white/20 shadow-2xl backdrop-blur-2xl mt-4 sm:-mt-10">
            <img
               src="/example.png"
               alt="Example Screenshot"
               className="rounded-2xl w-full h-auto"
              />
          </div>
        </div>
       </MaxWidthWrapper>
    </>
  );
}