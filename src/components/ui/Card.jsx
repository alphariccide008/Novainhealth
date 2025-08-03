import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`rounded-xl border bg-white shadow p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-sm text-gray-600 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
