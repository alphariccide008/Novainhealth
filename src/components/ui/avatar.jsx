import React from "react";

export function Avatar({ children, className = "" }) {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

export function AvatarFallback({ children }) {
  return (
    <div className="h-full w-full bg-gray-300 flex items-center justify-center text-white">
      {children}
    </div>
  );
}
