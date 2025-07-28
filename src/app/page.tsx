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
      <div className="flex flex-col justify-center items-center text-center mt-4 text-[#F8F9FA]">
        <h1 className="text-5xl font-bold">
          Send Emails <span className="text-[#0085ff]">Anonymously</span>
        </h1>

        <div className="mt-4 p-4 font-medium text-lg max-w-xl text-[#9e9e9e]">
          <p>Relyfe lets you send emails without revealing your identity</p>
          <h2 className="text-[#FFFFFF] font-bold text-2xl mt-3">instantly or scheduled for later.</h2>
        </div>

        <div className="mt-8 text-xl font-medium space-y-2 text-[#9e9e9e]">
          <h2>Send it now,</h2>
          <p>or choose exactly when it should be delivered.</p>
          <h2 className="p-3 text-[#69b4ff] text-4xl font-bold">All fully anonymous.</h2>
        </div>

        <button 
          className="mt-9 px-9 py-3 rounded-xl bg-[#FF6B35] font-bold text-[#1E1E1E] cursor-pointer hover:bg-[#FFD700] transition-colors duration-200"
          onClick={() => router.push('/draft-mail')}
          >
          Try It Now
        </button>
      </div>

    </MaxWidthWrapper>
    </>
  );
}
