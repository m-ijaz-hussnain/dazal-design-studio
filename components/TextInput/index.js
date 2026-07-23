import React from "react";
import styles from "./text-input.module.css";
import cn from "classnames";

export default function TextInput({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  ...props
}) {
  return (
    <input
      className={cn("caption", styles.input)}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      {...props}
    />
  );
}