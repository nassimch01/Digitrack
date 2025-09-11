import React from 'react';

export function Button({ children, ...props }) {
    return (
        <button
            {...props}
            style={{
                padding: '10px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
            }}
        >
            {children}
        </button>
    );
}
