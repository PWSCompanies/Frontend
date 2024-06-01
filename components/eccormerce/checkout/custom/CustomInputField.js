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

export const TextArea = ({
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

