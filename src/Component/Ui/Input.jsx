import React from "react";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  ...props
}) {

  return (
    <div className="space-y-1">

      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-2 border rounded-md
          focus:outline-none focus:ring-2 focus:ring-purple-500
          ${error ? "border-red-500" : "border-gray-300"}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

    </div>
  );
}