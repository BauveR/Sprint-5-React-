import React from "react";

export const Button = ({ variant = "primary", children, onClick, ...rest }) => {
  const baseStyles =
    "font-medium rounded-md text-sm px-4 py-2 transition-colors duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600",
    secondary:
      "bg-purple-600 text-purple-100 hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-600",
    ghost:
      "bg-gray-100 text-gray-900 shadow-sm hover:border-2 hover:border-gray-700 hover:text-gray-700",
    outlined:
      "bg-transparent text-white border-2 border-white w-full uppercase font-bold text-base tracking-wider mt-4 hover:bg-white hover:text-blue-600",
  };

  const className = `${baseStyles} ${variants[variant] || variants.primary}`;

  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};
