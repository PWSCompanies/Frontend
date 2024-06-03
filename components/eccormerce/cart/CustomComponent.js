import { useEffect } from "react";
import { CheckMarkIcon1, CloseIcon } from "../svg/SvgImages";

export const FloatInputField = ({
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
        className="absolute cursor-text left-0 -top-3 text-zinc-500 bg-white text-sm font-medium bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-focus:-top-3 peer-focus:text-green-600 peer-focus:text-sm transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export const InputField = ({
  id,
  name,
  label,
  disabled,
  type = 'text',
  value,
  onChange,
  placeholder = "",
  className = "",
  containerStyle = "",
  labelClassName = ""
}) => {
  return (
    <div className={`relative w-full bg-inherit ${containerStyle}`}>
      <label htmlFor={id} className={`block mb-2 text-zinc-800 text-sm font-medium ${labelClassName}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-neutral-600 text-sm font-normal w-full h-[55px] sm:h-[60px] bg-white rounded-[10px] border border-zinc-300 placeholder-neutral-600 ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600 ${disabled ? '' : ''} ${className}`}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export const TextAreaField = ({
  id,
  name,
  label,
  disabled,
  type = 'text',
  value,
  onChange,
  placeholder = "",
  className = "",
  containerStyle = "",
  labelClassName = ""
}) => {
  return (
    <div className={`relative w-full bg-inherit ${containerStyle}`}>
      <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-700 ${labelClassName}`}>
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-neutral-600 text-sm font-normal w-full h-[130px] bg-white rounded-[10px] border border-zinc-300 resize-none placeholder-neutral-600 ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600 ${disabled ? '' : ''} ${className}`}
        placeholder={placeholder}
        disabled={disabled}
      />
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

export const Modal = ({
  isOpen,
  onClose,
  showCloseIcon = true,
  showCheckedIcon = true,
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
    <div className="fixed inset-0 z-50 backdrop-blur-md px-4 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full ">
        <div className="mx-auto max-w-[830px] bg-white rounded-[10px] overflow-hidden">
          <div className="clear-both relative">
            <div className="w-full h-[60px] z-10 bg-white absolute left-0 right-0 top-0 p-5 border-b border-zinc-300 justify-between items-center flex">
              <div className="self-stretch w-full justify-between items-center gap-[5px] flex">
                <div className="self-stretch justify-start items-center gap-[5px] flex">
                  {showCheckedIcon && <CheckMarkIcon1 />}
                  <span className="text-zinc-800 text-sm font-semibold">
                    {title}
                  </span>
                </div>
                {showCloseIcon && (
                  <button onClick={onClose} className="float-right">
                    <CloseIcon className="text-black w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
            <main className="pt-[60px] bg-white">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  disabled,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full h-[60px] px-[21px] text-zinc-500 text-base font-medium bg-white rounded-[10px] border border-zinc-300 placeholder-transparent ring-zinc-300 focus:ring-green-600 focus:outline-none focus:border-green-600 ${
            disabled ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
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
};

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  customStyles = {},
}) => {
  const {
    padding = "px-5 py-3",
    textColor = "text-white",
    bgColor = "bg-green-600",
    rounded = "rounded-[10px]",
    customClasses = "",
  } = customStyles;

  const baseStyles = `${padding} ${textColor} text-xs font-medium ${bgColor} ${rounded} justify-center items-center flex`;
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabledStyles} ${customClasses}`}
    >
      {children}
    </button>
  );
};
