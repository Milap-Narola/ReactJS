import React from "react";
import { getUserDetails } from "../userDetails";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
  let user = getUserDetails();

  if (user) {
    return children
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;