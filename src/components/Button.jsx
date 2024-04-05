/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  classname = "",
  ...props
}) => {
  return (
    <div>
      <button
        className={`px-4 py-2 rounded-lg ${classname} ${bgColor} ${textColor}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
