import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavbarWrapper, Button } from "./Navbar.styled";

export default function Navbar() {
  const { isAuth, handleAuth } = useContext(AuthContext);

  const handleLogin = () => {
    if (isAuth) handleAuth();
  };
  return (
    <NavbarWrapper>
      <Button onClick={handleLogin}>{isAuth ? "LOGOUT" : "LOGIN"}</Button>
    </NavbarWrapper>
  );
}
