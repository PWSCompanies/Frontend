import React, { useState } from "react";

const usePasswordValidation = () => {
  const [passwordValid, setPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const hasMinimumLength = password.length >= 8;
    const hasSymbolNumberUpperCase =
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) &&
      /[0-9]+/.test(password) &&
      /[A-Z]+/.test(password);

    setPasswordValid(hasMinimumLength && hasSymbolNumberUpperCase);
  };

  return { passwordValid, validatePassword };
};

export default usePasswordValidation;
