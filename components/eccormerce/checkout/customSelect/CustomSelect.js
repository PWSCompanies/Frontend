// components/CustomSelect.js
import React from 'react';

export default function CustomSelect({ options, value, onChange, label, placeholder, disabled }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <select
          className={`w-full h-[60px] px-[21px] text-zinc-500 text-base font-medium bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600 ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          <option value="" disabled>{`${placeholder}`}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
