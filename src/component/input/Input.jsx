"use client";

const Input = ({ name, error, label, className }) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input aria-invalid={error ? "true" : "false"} name={name} />
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

export default Input;
