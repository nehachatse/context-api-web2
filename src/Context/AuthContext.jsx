import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleAuth = (userName) => {
    console.log("Im here", isAuth);
    if (isAuth) {
      setIsAuth(false);
    } else {
      setUser(userName);

      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            setToken(res.token);
            setIsAuth(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, user, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
