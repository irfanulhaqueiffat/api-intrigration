import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className = "",
}) => {
  const baseClass =
    "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const VariantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md focus:ring-2 focus:ring-blue-300",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 focus:ring-2 focus:ring-gray-200",
    outline:
      "bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-800 focus:ring-2 focus:ring-gray-200",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-md focus:ring-2 focus:ring-red-200",
    success:
      "bg-green-600 hover:bg-green-700 text-white shadow-md focus:ring-2 focus:ring-green-200",
    subtle: "bg-white text-gray-700 hover:bg-gray-50",
    link: "bg-transparent underline text-blue-600 hover:text-blue-700",
  };

  const SizeStyle = {
    xs: "px-2 py-1 text-xs rounded",
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-md",
    lg: "px-5 py-3 text-base rounded-lg",
    pill: "px-4 py-2 text-sm rounded-full",
  };

  const styles = `${baseClass} ${VariantStyles[variant] || ""} ${
    SizeStyle[size] || ""
  } ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;
