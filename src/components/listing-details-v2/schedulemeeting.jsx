// Calendly badge widget begin
import React from "react";
import { useEffect } from "react";

const ScheduleMeeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/ahmaddd-sohail759/schedule-meeting-tour"
        style={{ minWidth: "320px", height: "670px", marginTop: `-3%` }}
      ></div>
    </>
  );
};

export default ScheduleMeeting;
