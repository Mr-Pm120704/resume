import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-blue-950 text-white font-sans">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="mb-8">
          <span className="text-sm flex space-x-2 items-center">
            <span className="text-green-300">★ Trustpilot</span>
            <span className="ml-2">★★★★★</span>
            <span className="mx-2 text-red-400">● G2</span>
            <span className="ml-2">★★★★★</span>
            <span className="mx-2 text-yellow-300">🌟 Capterra</span>
            <span className="ml-2">★★★★★</span>
          </span>
        </div>
        <div className="mb-7">
          <span className="bg-blue-500 text-white font-medium px-5 py-2 rounded-full">
            🚀 Introducing the Web MCP - now free!
          </span>
        </div>
        <h1 className="text-5xl font-bold text-center mb-5 mt-12">
          Limitless web data infrastructure for AI & BI
        </h1>
        <p className="text-lg text-center max-w-3xl mb-10">
          Discover, access, extract, and interact with any public website. Get structured, reliable, real-time or historical data at petabyte-scale. Ready for any model, pipeline, or workflow.
        </p>
        <div className="flex flex-col items-center w-full max-w-md">
          <form className="flex w-full bg-blue-950 p-2 rounded-xl shadow-md">
            <input
              type="email"
              placeholder="Business Email*"
              className="flex-grow p-3 bg-blue-900 text-white rounded-l-xl outline-none border-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-r-xl"
            >
              Start free trial
            </button>
          </form>
          <div className="mt-5 flex items-center bg-gray-800 p-3 w-full rounded-md shadow-sm">
            <span className="text-green-400 mr-2">✔️</span>
            <span className="mr-4 font-medium">Success!</span>
            <span className="ml-auto text-xs text-gray-400">CLOUDFLARE</span>
            <span className="ml-2 text-xs text-gray-400">Privacy • Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
