import React from 'react'

const InputField = ({
  label,
  value,
  onChange,
  onBlur,
  name,
  type = 'text',
  className,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField
