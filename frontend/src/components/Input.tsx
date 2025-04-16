import { InputProps } from './types';
import { useRef } from 'react';

const Input = ({
  id,
  name,
  type,
  value,
  isAutoFocused = false,
  placeholder,
  required = false,
  maxLength,
  className = '',
  colorVariant = 'silver',
  borderVariant = 'thick',
  textSize = 'medium',
  children,
  labelBgClassName = 'bg-white dark:bg-raisin-black',
  onChange,
  onPaste,
  onKeyDown,
}: InputProps) => {
  const colorStyles = {
    silver: 'border-silver dark:border-silver/40',
    jet: 'border-jet',
    gray: 'border-gray-5000 dark:text-silver',
  };
  const borderStyles = {
    thin: 'border',
    thick: 'border-2',
  };
  const textSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        className={`peer h-[42px] w-full rounded-full bg-transparent px-3 py-1 text-jet placeholder-transparent outline-none dark:text-bright-gray ${colorStyles[colorVariant]} ${borderStyles[borderVariant]} ${textSizeStyles[textSize]} [&:-webkit-autofill]:appearance-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill_selected]:bg-transparent`}
        type={type}
        id={id}
        name={name}
        autoFocus={isAutoFocused}
        placeholder={placeholder || ''}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        onKeyDown={onKeyDown}
        required={required}
      >
        {children}
      </input>
      {placeholder && (
        <label
          htmlFor={id}
          className={`absolute -top-2.5 left-3 px-2 ${textSizeStyles[textSize]} transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:${textSizeStyles[textSize]} pointer-events-none cursor-none peer-placeholder-shown:text-gray-4000 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-gray-4000 dark:text-silver dark:peer-placeholder-shown:text-gray-400 ${labelBgClassName}`}
        >
          {placeholder}
          {required && (
            <span className="ml-0.5 text-[#D30000] dark:text-[#D42626]">*</span>
          )}
        </label>
      )}
    </div>
  );
};

export default Input;
