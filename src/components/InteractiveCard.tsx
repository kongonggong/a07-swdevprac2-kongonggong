"use client"; 

import React, { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg transition-all duration-300 ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
