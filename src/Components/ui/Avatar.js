import React from "react";

// Simple Avatar Component (no TypeScript types)
export function Avatar({ src, alt, fallback }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <span className="text-sm font-medium text-gray-600">{fallback}</span>
      )}
    </div>
  );
}
