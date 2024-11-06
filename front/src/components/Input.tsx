type InputProps = {
  type: "text" | "number" | "email" | "password";
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
};

const Input = ({
  type,
  name,
  value,
  placeholder,
  required = false,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className={`p-2 border-2 border-gray-300 rounded-md text-xl shadow-sm border-opacity-20 focus:border-gray-800 ${className}`}
    />
  );
};

export default Input;
