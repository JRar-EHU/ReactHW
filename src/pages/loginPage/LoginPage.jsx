import styles from "./LoginPage.module.css";
import { Button } from "@components/UI/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "@hooks/useAuth.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/authSlice.js";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    const name = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (name && password) {
      try {
        const loggedInUser = await login(name, password);
        dispatch(setUser(loggedInUser));
        navigate("/");
      } catch (error) {
        alert("Login failed.");
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <label className={styles.label}>
            Username
            <input className={styles.input} ref={usernameRef} type="text" />
          </label>
          <label className={styles.label}>
            Password
            <input ref={passwordRef} className={styles.input} type="password" />
          </label>
          <Button onClick={handleLogin}>Login</Button>
        </>
      )}
    </div>
  );
};
