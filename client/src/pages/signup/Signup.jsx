import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.signupContainer}>
      <form className={styles.formSection} onSubmit={handleFormSubmit}>
        <h1 className={styles.title}>Sign Up</h1>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              className="text-lg text-neutral-900"
              value="Username"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Type Username"
            required
          />
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
              className="text-lg text-neutral-900"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type Email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              className="text-lg text-neutral-900"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Type Password"
            required
          />
        </div>
        <Button type="submit" className={styles.submitBtn}>
          Submit
        </Button>
        <div className={styles.checkboxItem}>
          Have an account?
          <Link to={"/sign-in"}>Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
