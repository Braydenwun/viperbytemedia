import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  error,
  required,
  onChange
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-2">
        {label} {required && <span className="text-emerald-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-white/5 border ${
          error ? 'border-red-500' : 'border-white/10'
        } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;