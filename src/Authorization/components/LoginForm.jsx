import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField.jsx";

const inputs = [
  { inputName: "User email", errorMessage: "Enter your email" },
  { inputName: "Password", errorMessage: "Enter your password" },
];

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        {inputs.map(({ inputName, errorMessage }) => (
          <InputField
            key={inputName}
            inputName={inputName}
            errorMessage={errorMessage}
            register={register}
            errors={errors}
          />
        ))}

        <input value="Log In" className="login-form-submitBtn" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
