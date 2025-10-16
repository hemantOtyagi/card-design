"use client";
import { useState, useRef, useEffect } from "react";
import {
  Share2,
  Download,
  PenLine,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Search,
} from "lucide-react";

export default function PerplexityConversation() {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const mockSearch = (q) =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            title: q,
            answer: `Here’s a mock response for "${q}". Replace this later with your real API data.`,
          }),
        1000
      )
    );

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    const q = query.trim();
    setQuery("");
    const data = await mockSearch(q);

    setResultsList((prev) => [...prev, data]);
    setLoading(false);

    // Scroll to bottom when new result added
    setTimeout(() => {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hasResults = resultsList.length > 0;

  return (
    <div className="h-screen w-[60vw] flex flex-col bg-[#0d0d0d] text-gray-100 items-center relative">
      {/* Results Section */}
      <div
        ref={containerRef}
        className={`flex-1 overflow-auto px-6 hide-scrollbar ${
          hasResults ? "py-10 space-y-16" : ""
        }`}
      >
        {resultsList.length === 0 && !loading ? (
          <div className="text-center mt-48">
            <h2 className="text-2xl font-semibold text-gray-300">
              Ask anything
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Type your question below and press Enter
            </p>
          </div>
        ) : (
          resultsList.map((r, i) => (
            <div key={i} className="max-w-3xl mx-auto w-full">
              <h1 className="text-3xl font-semibold mb-3">{r.title}</h1>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-blue-400">
                  Answer
                </span>
              </div>

              <hr className="border-gray-800 mb-4" />

              <p className="text-gray-200 text-base leading-relaxed">
                {r.answer}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mt-6 border-t border-gray-800 pt-4">
                <button className="hover:text-gray-300 flex items-center gap-1">
                  <Share2 size={16} /> Share
                </button>
                <button className="hover:text-gray-300 flex items-center gap-1">
                  <Download size={16} /> Export
                </button>
                <button className="hover:text-gray-300 flex items-center gap-1">
                  <PenLine size={16} /> Rewrite
                </button>
                <div className="ml-auto flex items-center gap-3">
                  <ThumbsUp size={16} className="hover:text-gray-300" />
                  <ThumbsDown size={16} className="hover:text-gray-300" />
                  <MoreHorizontal size={16} className="hover:text-gray-300" />
                </div>
              </div>
            </div>
          ))
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="max-w-3xl mx-auto mt-8 space-y-4 animate-pulse">
            <div className="h-6 bg-gray-800 rounded w-1/2"></div>
            <div className="h-24 bg-gray-800 rounded"></div>
          </div>
        )}
      </div>

      {/* Input Section — moves between center and bottom */}
      <form
        onSubmit={handleSearch}
        className={`w-[60%] rounded-2xl bg-[#121212] border border-gray-800 p-4 flex items-center gap-3 ${
          hasResults
            ? "sticky bottom-3" // when results exist -> bottom
            : "absolute top-1/2 -translate-y-1/2" // initially centered
        }`}
      >
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a follow-up"
            className="w-full bg-[#1b1b1b] text-gray-100 border border-gray-800 rounded-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
