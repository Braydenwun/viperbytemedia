import { useState, ChangeEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const isValid = Object.values(errors).every(error => !error) &&
    Object.values(values).every(value => value.length > 0);

  return {
    values,
    errors,
    handleChange,
    isValid
  };
};