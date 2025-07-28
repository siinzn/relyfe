const Gradient = () => {
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden -z-10">
      <div className="relative w-full h-full">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 flex items-center justify-center blur-[100px]"
        >
          <div
            style={{
              clipPath: "polygon(78% 42%, 95% 65%, 92% 28%, 82% 5%, 75% 8%, 68% 35%, 58% 58%, 48% 72%, 42% 55%, 40% 32%, 25% 78%, 5% 68%, 22% 95%, 32% 75%, 80% 92%, 78% 42%)"
            }}
            className="w-full h-full bg-gradient-to-tr from-[#FF6B35] to-[#0052FF] opacity-50  transform rotate-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Gradient