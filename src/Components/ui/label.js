import React from 'react';

export function Label({ children, htmlFor }) {
    return (
        <label htmlFor={htmlFor} style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>
            {children}
        </label>
    );
}
