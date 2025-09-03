import React from "react";

const BookingWidget = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-md border bg-white p-5">
      {/* Price Section */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
          alt="activity"
          className="w-25 h-20 object-cover rounded-md"
        />
        <div>
          <p className="text-gray-800 font-semibold">
            From <span className="text-xl font-bold">₹8000</span>
          </p>
          <p className="text-sm text-gray-600">per person</p>
          <button className="text-xs text-blue-600 mt-1 hover:underline">
            Show Price Breakup →
          </button>
        </div>
      </div>

      <hr className="my-3" />

      {/* Date Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gray-100 rounded-md px-3 py-2 text-center">
          <p className="text-xs uppercase text-gray-500">Date</p>
          <p className="text-sm font-semibold">SEPT. 3</p>
        </div>
        <div>
          <p className="text-sm text-gray-800">
            Next Upcoming On{" "}
            <span className="italic text-gray-600">
              Wednesday - Sept. 3, 2025
            </span>
          </p>
          <button className="text-xs text-blue-600 hover:underline">
            Show +120 Batches →
          </button>
        </div>
      </div>

      {/* Select Dates Button */}
      <button className="w-full py-2 bg-black text-white rounded-sm font-bold text-xs hover:bg-gray-800 transition mb-4">
        SELECT DATES AND BOOK
      </button>

      <hr className="my-3" />

      {/* Help Section */}
      <p className="text-sm text-gray-700 mb-3">
        Need Help? Directly Contact Host
      </p>
      <button className="w-full py-2 rounded-sm bg-gray-100 text-gray-800 font-bold text-xs hover:bg-gray-200 transition">
        REQUEST CALLBACK
      </button>
    </div>
  );
};

export default BookingWidget;
