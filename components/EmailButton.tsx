"use client";
import React, { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface EmailButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  email: string;
}

const EmailButton = ({ email, children, ...props }: EmailButtonProps) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

export default EmailButton;
