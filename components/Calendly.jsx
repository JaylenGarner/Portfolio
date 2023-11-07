"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
      <InlineWidget
        url="https://calendly.com/jaylen-garner"
        pageSettings={{
          backgroundColor: "020817",
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "F8FAFC",
        }}
      />
    </div>
  );
};

export default Calendly;
