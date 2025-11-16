import React from "react";

export default function HeroSection() {
   return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#061534] text-white overflow-hidden">
      {/* === Background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061534] via-[#09215f] to-[#061534]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(225, 225, 225, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,78,216,0.3),transparent_70%)]" />

      {/* === Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
        {/* Trust badges */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <img src="/assets/trustpilot.png" alt="Trustpilot" className="h-5" />
            <img src="/assets/trustpilot-stars.png" alt="Trustpilot stars" className="h-5" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/g2.png" alt="G2" className="h-5" />
            <img src="/assets/g2-stars.png" alt="G2 stars" className="h-5" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/capterra.png" alt="Capterra" className="h-5" />
            <img src="/assets/capterra-stars.png" alt="Capterra stars" className="h-5" />
          </div>
        </div> */}

        {/* Highlight pill */}
        <div className="px-6 py-2 mb-8 text-sm font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full shadow-lg">
          🌟 Introducing the Web MCP - now free!
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Limitless web data <br className="hidden sm:block" />
          infrastructure for AI & BI
        </h1>

        {/* Paragraph */}
        <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl">
          Discover, access, extract, and interact with any public website. Get structured,
          reliable, real-time or historical data at petabyte-scale. Ready for any model,
          pipeline, or workflow.
        </p>

        {/* Input and button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-5">
          <input
            type="email"
            placeholder="Business Email*"
            className="w-full sm:flex-1 px-5 py-3 rounded-full bg-[#0d204f] border border-[#1a3a80] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
            Start free trial
          </button>
        </div>

        {/* Cloudflare box */}
        {/* <div className="px-6 py-3 bg-[#0a1f44] border border-gray-700 rounded-md shadow-md flex items-center gap-3 max-w-xs">
          <div className="flex items-center justify-center bg-green-500 rounded-full w-5 h-5 text-sm font-bold">
            ✓
          </div>
          <span className="text-white font-medium">Success!</span>
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
            <img src="/assets/cloudflare.png" alt="Cloudflare" className="h-4" />
            <span>Privacy · Terms</span>
          </div>
        </div> */}
      </div>
    </section>
  );  
}
