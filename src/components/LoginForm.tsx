import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/LoginForm.module.scss";
import { RiArrowRightFill } from "react-icons/ri";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // make api call
    console.log(email, password);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h1>Sign In</h1>

      <input
        type="email"
        placeholder="EMAIL*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>
        Next &nbsp; <RiArrowRightFill />
      </button>

      <div className={styles["form-text-sm"]}>
        <Link to="/">
          <span>Forgot Password</span>
        </Link>

        <div>
          Not a member? -{" "}
          <Link to="/">
            <span>Start for Free</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
