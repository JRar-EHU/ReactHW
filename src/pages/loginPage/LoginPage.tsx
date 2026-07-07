import styles from "./LoginPage.module.css";
import { Button } from "@components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "@hooks/useAuth";
import { setUser } from "@store/slices/authSlice";
import { useAppDispatch } from "@store/hooks";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    const name = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    if (name && password) {
      try {
        const loggedInUser = await login(name, password);
        if (loggedInUser) {
          dispatch(setUser(loggedInUser));
          navigate("/");
        }
      } catch (error) {
        alert("Login failed.");
      }
    }
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={styles.loginPage}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <h1 className={styles.title}>Log in</h1>
          <div className={styles.loginBlock}>
            <label className={styles.label}>
              Username
              <input
                className={styles.input}
                ref={usernameRef}
                type="text"
                placeholder="test@test.ru"
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                ref={passwordRef}
                className={styles.input}
                type="password"
                placeholder="123456"
              />
            </label>
            <div className={styles.buttonsBlock}>
              <Button onClick={handleLogin}>Submit</Button>
              <Button onClick={handleCancel} variant="inactive">
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
