// src/pages/ResumeCustomizer.jsx
import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Temp from "./pages/Temp";
import Inputs from "./pages/Inputs";

export default function ResumeCustomizer() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Resume Customizer</h1>
      {/* Resume Preview */}
    <Inputs/>
      
    </div>
  );
}
