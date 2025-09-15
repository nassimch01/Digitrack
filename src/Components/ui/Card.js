import React from 'react';

export function Card({ children }) {
  return <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div style={{ marginBottom: '1rem' }}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h2>{children}</h2>;
}

export function CardDescription({ children }) {
  return <p style={{ color: '#666' }}>{children}</p>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
export function CardFooter({ children, className }) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
