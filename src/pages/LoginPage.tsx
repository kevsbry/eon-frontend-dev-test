import React from "react";
import styles from "../styles/LoginPage.module.scss";

import { ReactComponent as UserLogo } from "../assets/user.svg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className={styles["login-page"]}>
      <div className={styles["user-logo-container"]}>
        <UserLogo className={styles["user-logo"]} />
      </div>

      <div className={styles["login-form-container"]}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
