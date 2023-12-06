const Input = ({
  label,
  placeholder,
  type,
  name,
  onChange,
  errors,
  touched,
  required,
}) => {
  return (
    <div className={`w-full ${errors ? "" : "mb-4"}`}>
      <label
        className={`text-sm ${
          required &&
          "after:content-['*'] after:ml-1 after:text-[#e02b27] after:text-base"
        }`}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        className={`
          text-base
          border border-text-secondary
          p-2 tablet:p-3 my-2
          w-full min-h-[43px] tablet:min-h-[58px]
          bg-transparent
          ${
            errors && touched
              ? "border-rose-500 focus:border-rose-500 mb-0"
              : "border-neutral-300 focus:border-black mb-5"
          }
        `}
      />
      {errors && touched && <p className="mb-5 text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
