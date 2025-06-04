"use client";

import React from "react";

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const highlightDates = [8, 28, 29, 30];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen font-sans">
      {/* To Do Sidebar */}
      <div className="bg-white shadow-lg rounded-md w-full md:w-80 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg bg-[#8b0031] px-4 py-2 rounded-md w-full font-bold">
            To Do
          </h2>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Today</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <p className="bg-gray-200 flex-1 rounded px-2">Cover page sa 141</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <p className="bg-gray-200 flex-1 rounded px-2">Cover page sa 141</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Tomorrow</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-green-700"></span>
            <p className="bg-gray-200 flex-1 rounded px-2">Mag lu2</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-700"></span>
            <p className="bg-gray-200 flex-1 rounded px-2">Mag lu2</p>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-[#8b0031] mb-4">April</h1>
        <div className="grid grid-cols-7 gap-4 text-center font-medium">
          {days.map((day) => (
            <div key={day} className="text-gray-600">{day}</div>
          ))}

          {dates.map((date) => (
            <div key={date} className="text-gray-800 relative">
              <div>{date}</div>
              {highlightDates.includes(date) && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400 mt-1"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
