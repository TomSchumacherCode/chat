import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/home" />;
}

export default ProtectedRoute;
