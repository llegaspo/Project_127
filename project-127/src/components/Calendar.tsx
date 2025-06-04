"use client";

import React from "react";

export default function Calendar() {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://embed.figma.com/design/lLM7jRtDQsHHCSFf6Tii9W/141-Calendar?node-id=0-1&embed-host=share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
