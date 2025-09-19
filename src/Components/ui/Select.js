import React, { useState, useRef, useEffect, forwardRef } from "react";

// Main Select Root
export function Select({ value, onValueChange, children, placeholder }) {
  // internal state if uncontrolled
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(prev => !prev);

  return (
    <div className="relative inline-block text-left w-full">
      {React.Children.map(children, child => {
        // Pass down open state and toggle methods as needed
        return React.cloneElement(child, { open, setOpen, value, onValueChange, placeholder });
      })}
    </div>
  );
}

// Trigger Button
export const SelectTrigger = forwardRef(({ children, className = "", open, setOpen }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      onClick={() => setOpen(prev => !prev)}
      className={`w-full px-4 py-2 border rounded-md bg-white flex justify-between items-center ${className}`}
    >
      {children}
      <span className="ml-2">&#x25BC;</span> { /* down-arrow */ }
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

// Displayed Value inside Trigger
export const SelectValue = forwardRef(({ value, placeholder = "Select...", className = "" }, ref) => {
  return (
    <span ref={ref} className={`truncate ${!value ? "text-gray-400" : "text-gray-900"} ${className}`}>
      {value || placeholder}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

// The dropdown content wrapper
export const SelectContent = forwardRef(({ children, open, setOpen, className = "" }, ref) => {
  // close when clicking outside
  const contentRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref || contentRef}
      className={`absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10 ${className}`}
    >
      {children}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

// Individual select item
export const SelectItem = forwardRef(({ value: itemValue, children, onValueChange, setOpen, className = "" }, ref) => {
  const handleClick = () => {
    onValueChange(itemValue);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});
SelectItem.displayName = "SelectItem";
