import { useEffect } from "react";
import { CloseIcon } from "../svg/SvgImages";

export const InputField = ({
  id,
  name,
  label,
  disabled,
  type,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <div className="relative w-full bg-inherit">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full h-[60px] px-[21px] pt-5 pb-[21px] bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600"
        placeholder={placeholder}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="absolute cursor-text left-0 -top-3 text-zinc-500 text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export const CheckboxInputField = ({
  id,
  name,
  label,
  type = "checkbox",
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full bg-inherit">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-green-600 focus:ring-2"
      />
      <label htmlFor={id} className="ms-2 text-zinc-800 text-sm font-medium">
        {label}
      </label>
    </div>
  );
};

export const CustomModal = ({
  isOpen,
  onClose,
  showCloseIcon = true,
  children,
  title,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-600 bg-opacity-20">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="pb-2 w-full text-center text-xl text-black">
            {title}
          </h2>
          {showCloseIcon && (
            <button onClick={onClose} className="float-right">
              <CloseIcon className="text-black w-6 h-6" />
            </button>
          )}
        </div>
        <div className="clear-both">{children}</div>
      </div>
    </div>
  );
};

export const CustomSelect = ({ options, value, onChange, label, placeholder, disabled }) => {
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

export const Button = ({ children, onClick, disabled = false, customStyles = {} }) => {
  const {
    padding = 'px-5 py-3',
    textColor = 'text-white',
    bgColor = 'bg-green-600',
    rounded = 'rounded-[10px]',
    additionalClasses = '',
  } = customStyles;

  const baseStyles = `${padding} ${textColor} text-xs font-medium ${bgColor} ${rounded} justify-center items-center flex`;
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabledStyles} ${additionalClasses}`}
    >
      {children}
    </button>
  );
};
