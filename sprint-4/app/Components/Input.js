import React from "react";

const Input = ({ name, type = "text", placeholder, value, onChange, required = false}) => (
    <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={"w-full py-2 border-b-2 border-gray-400 focus:border-pink-500 focus:outline-none "}
    />
);

export default Input;
