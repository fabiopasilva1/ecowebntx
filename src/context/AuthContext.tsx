/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { getAPIClient } from "../data/axios";
import { parseCookies, setCookie } from "nookies";
type User = {
  username: string;
  email: string;
  avatar: object;
};

type signInData = {
  identifier: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;

  signIn: (data: signInData) => Promise<void>;
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const apiClient = getAPIClient();
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;
  const { "ecw.token": token } = parseCookies();
  useEffect(() => {
    if (token) {
      const options = {
        params: { populate: "deep" },
        headers: {
          "Content-Type": "application/json",
        },
      };

      apiClient
        .get("/api/users/me", options)
        .then(function (ressponse) {
          setUser(ressponse.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, []);

  async function signIn({ identifier, password }: signInData) {
    const options = {
      method: "POST",
      url: "/api/auth/local",
      params: { "": "" },
      headers: { "Content-Type": "application/json" },
      data: { identifier, password },
    };
    const dataUser = await apiClient
      .request(options)
      .then(function (ressponse) {
        setCookie(undefined, "ecw.token", ressponse.data.jwt, {
          maxAge: 60 * 60 * 1, // 1hour
        });
        apiClient.defaults.headers[
          "Authorization"
        ] = `Bearer ${ressponse.data.jwt}`;
        Router.push("/dashboard");

        return ressponse.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    apiClient.defaults.headers["Authorization"] = `Bearer ${dataUser.jwt}`;

    setUser(dataUser);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
