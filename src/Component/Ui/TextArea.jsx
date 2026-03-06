import React from "react";

export default function TextArea({
  label,
  rows = 4,
  placeholder,
  value,
  onChange,
  error,
}) {

  return (
    <div className="space-y-1">

      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-2 border rounded-md
          focus:outline-none focus:ring-2 focus:ring-purple-500
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

    </div>
  );
}