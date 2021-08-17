import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function Logout(props) {
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        props.history.push("/");
      });
  }, []);
  return <div></div>;
}

export default Logout;
