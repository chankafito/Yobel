import React, { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

interface CleanInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export function CleanInput({ label, className, error, ...props }: CleanInputProps) {
  return (
    <div className="relative group w-full">
      {label && (
        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 transition-colors group-focus-within:text-black">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            "block w-full py-2.5 bg-transparent border-b border-gray-200 text-lg text-black placeholder:text-gray-300 focus:outline-none resize-none transition-colors duration-300 hover:border-gray-400",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {/* Animated Underline */}
        <div className={cn(
            "absolute bottom-0 left-0 h-[1.5px] bg-black w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-focus-within:scale-x-100",
            error && "bg-red-500"
        )} />
      </div>
    </div>
  );
}

interface CleanSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  placeholder?: string;
  error?: boolean;
}

export function CleanSelect({ label, className, options, placeholder, error, ...props }: CleanSelectProps) {
  const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

  useEffect(() => {
      if (props.value !== undefined) {
          setHasValue(!!props.value && props.value !== "");
      }
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHasValue(e.target.value !== "");
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className="relative group w-full">
      {label && (
        <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 transition-colors group-focus-within:text-black">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "block w-full py-2.5 bg-transparent border-b border-gray-200 text-lg focus:outline-none appearance-none rounded-none transition-colors duration-300 cursor-pointer hover:border-gray-400",
            hasValue ? "text-black" : "text-gray-400",
            "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.41%200.590088L6%205.17009L10.59%200.590088L12%202.00009L6%208.00009L0%202.00009L1.41%200.590088Z%22%20fill%3D%22%23000000%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.5rem_center]",
            error && "border-red-500",
            className
          )}
          onChange={handleChange}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
        {/* Animated Underline */}
        <div className={cn(
            "absolute bottom-0 left-0 h-[1.5px] bg-black w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-focus-within:scale-x-100",
            error && "bg-red-500"
        )} />
      </div>
    </div>
  );
}

interface CleanTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: boolean;
}

export function CleanTextArea({ label, className, error, ...props }: CleanTextAreaProps) {
    return (
      <div className="relative group w-full">
        {label && (
          <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5 transition-colors group-focus-within:text-black">
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            className={cn(
              "block w-full py-2.5 bg-transparent border-b border-gray-200 text-lg text-black placeholder:text-gray-300 focus:outline-none resize-none transition-colors duration-300 hover:border-gray-400",
              error && "border-red-500",
              className
            )}
            {...props}
          />
          {/* Animated Underline */}
          <div className={cn(
              "absolute bottom-0 left-0 h-[1.5px] bg-black w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-focus-within:scale-x-100",
              error && "bg-red-500"
          )} />
        </div>
      </div>
    );
  }
