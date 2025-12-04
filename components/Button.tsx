import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    solid: "bg-gold-400 text-dark-900 hover:bg-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    outline: "border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};