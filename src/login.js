import { useState } from "react";

export default function Login() {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
      setisLoggedIn(true);
    };
    const logOut = () => {
      setisLoggedIn(false);
    };
    
}