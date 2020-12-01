import React, { useState } from "react";
import Text from "../../components/Text";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrorMsg, setErrorMsg] = useState(false);

  const { email, password } = formData;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setErrorMsg(true);
    }, 750);
  };

  return (
    <div className="login-screen">
      <form className="login-form" onSubmit={handleSubmit}>
        {formErrorMsg && (
          <div className="error-msg">
            We are unable to authenticate your username and password
          </div>
        )}
        <Text
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Text
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="login-form__btn btn-primary">Signin</button>
      </form>
    </div>
  );
};

export default Login;
