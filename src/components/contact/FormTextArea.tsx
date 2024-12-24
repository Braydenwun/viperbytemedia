import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  name,
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        className={`w-full bg-white/5 border ${
          error ? 'border-red-500' : 'border-white/10'
        } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormTextArea;