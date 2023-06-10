import React from 'react';

function InputAdd({ value, onChange, type }) {
  const getPlaceholder = () => {
    if (type === 'income') {
      return 'Enter the income amount';
    } else if (type === 'expense') {
      return 'Enter the expense amount';
    }
    return 'Enter the value';
  };



  return (
    <input 
      type="text"  
      className="w-48 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value}
      onChange={onChange}
      placeholder={getPlaceholder()}
      required
    />
  );
}

export default InputAdd;
