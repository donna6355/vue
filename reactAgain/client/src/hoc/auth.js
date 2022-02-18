import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
// import { useNavigate } from "react-router-dom";

export default function AUTH(specificComponent, option, adminRoute = null) {
  //null anyone
  //true login user
  //false before login
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth()).then((res) => {
      //   if (!res.payload.isAuth) {
      //     //before login
      //     if (option) navigate("/login");
      //   } else {
      //     if (adminRoute && !res.payload.isAdmin) navigate("/");
      //     else if (!option) navigate("/");
      //   }
      console.log(res);
    });
  });
  return specificComponent;
}
