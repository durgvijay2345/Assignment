import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  loading = false,
  icon: Icon,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };

  return (
    <button
      className={`${variants[variant]} inline-flex items-center justify-center gap-2`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          {Icon && <Icon className="h-5 w-5" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
