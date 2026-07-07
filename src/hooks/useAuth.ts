import { useState } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAppDispatch } from "@store/hooks";
import { logout as logoutAction } from "@store/slices/authSlice";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredentials.user.email;
    } catch (error: any) {
      console.log("Login Error: ", error);
      throw new Error("Login failed.");
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      dispatch(logoutAction());
    } catch (error: any) {
      console.log("logout error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { login, logout, isLoading };
};
