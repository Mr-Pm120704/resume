import React from 'react'

/* Small inline SVG icon components (approximation of screenshot icons) */
const IconSquare = ({ className }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#3f6fff" />
    <path d="M7 10h10M7 14h6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const SmallIcon = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="8" r="3" fill="#9fc5ff" />
    <rect x="3" y="13" width="16" height="6" rx="2" fill="#97c2ff" />
  </svg>
)

const IconPlaceholder = ({ w = 18, h = 18 }) => (
  <svg width={w} height={h} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#0f2b45" />
    <path d="M7 10h10M7 14h6" stroke="#9fc5ff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const SmallDot = () => <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#7fb8ff" }} />

export default function MegaMenu() {
  return (
    // 🔹 FIXED: use `absolute top-full` to position directly below navbar
    <div className="absolute left-80 top-full w-full flex justify-center z-50 pointer-events-none">
      {/* Overlay to center and place menu where screenshot shows it */}
      <div className="pointer-events-auto mt-2">
        <div
           className="w-[1300px] rounded-xl p-6 flex gap-6 text-white"
  style={{
    background: "linear-gradient(180deg, rgba(6,18,36,0.96), rgba(6,18,36,0.94))",
    boxShadow: "0 30px 80px rgba(2,8,20,0.75)",
    border: "1px solid rgba(255,255,255,0.04)",
    backdropFilter: "blur(8px)",
  }}
        >
          {/* Column 1 */}
          <div className="flex-1 pr-2">
            <div className="text-xs tracking-widest text-slate-300 font-semibold mb-4">WEB ACCESS APIS</div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Unlocker API</div>
                  <div className="text-[13px] text-slate-400 mt-1">Say goodbye to blocks and CAPTCHAs</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Crawl API</div>
                  <div className="text-[13px] text-slate-400 mt-1">Turn entire websites into AI-friendly data</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">SERP API</div>
                  <div className="text-[13px] text-slate-400 mt-1">Get multi-engine search results on-demand</div>
                  <div className="text-xs text-sky-300 mt-1">Google · Bing · Duckduckgo · Yandex</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Browser API</div>
                  <div className="text-[13px] text-slate-400 mt-1">Spin up remote browsers, stealth included</div>
                </div>
              </li>
            </ul>

            {/* Proxy Services block */}
            <div className="mt-8 pt-6 border-t border-white/6">
              <div className="text-xs tracking-widest text-slate-300 font-semibold mb-4">PROXY SERVICES</div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[#0f2b45]">
                    <SmallDot />
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">
                      Residential Proxies
                      <span className="ml-2 text-[10px] bg-[#0f3b73] text-sky-200 px-2 py-[2px] rounded">50% OFF</span>
                    </div>
                    <div className="text-slate-400">150M+ global IPs from real-peer devices</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[#0f2b45]">
                    <SmallDot />
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">ISP Proxies</div>
                    <div className="text-slate-400">1.3M+ blazing fast static residential proxies</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[#0f2b45]">
                    <SmallDot />
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">Datacenter Proxies</div>
                    <div className="text-slate-400">1.3M+ high-speed proxies for data extraction</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[#0f2b45]">
                    <SmallDot />
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">Mobile Proxies</div>
                    <div className="text-slate-400">7M Mobile IPs for targeted mobile collection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 border-l border-white/6 pl-8">
            <div className="text-xs tracking-widest text-slate-300 font-semibold mb-4">DATA FEEDS</div>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Scrapers</div>
                  <div className="text-[13px] text-slate-400 mt-1">Fetch real-time data from 100+ websites</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Custom Scraper</div>
                  <div className="text-[13px] text-slate-400 mt-1">AI-powered data extraction from any website</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Datasets</div>
                  <div className="text-[13px] text-slate-400 mt-1">Pre-collected data from 100+ domains</div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[#0f2b45]">
                  <IconPlaceholder />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Functions</div>
                  <div className="text-[13px] text-slate-400 mt-1">Run your scrapers as serverless functions</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-72 border-l border-white/6 pl-8 flex flex-col gap-4">
            <div className="text-xs tracking-widest text-slate-300 font-semibold">DATA AND INSIGHTS</div>

            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-[#0f2b45] rounded flex items-center justify-center">
                  <SmallDot />
                </div>
                <div>
                  <div className="font-semibold text-sm">Retail Insights</div>
                  <div className="text-[13px] text-slate-400">Access AI-powered cross-retailer insights</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1b6fff] to-[#39d7ff] rounded-lg p-4 shadow-lg text-[#002433]">
              <div className="font-semibold">
                Deep Lookup <span className="ml-2 text-xs bg-white/30 px-2 rounded">Beta</span>
              </div>
              <div className="text-sm mt-1 text-[#002433]">Run complex queries on web-scale data</div>
            </div>

            <div className="text-slate-400 text-sm mt-1">
              Managed Data Services — Tailored enterprise-grade data acquisition
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
