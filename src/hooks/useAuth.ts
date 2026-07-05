import { useState } from "react";
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true);

      await addDoc(collection(db, "users"), {
        username: username,
        password: password,
        date: new Date().toISOString(),
      });

      return username;
    } catch (error) {
      console.log("useAuth Error: ", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
