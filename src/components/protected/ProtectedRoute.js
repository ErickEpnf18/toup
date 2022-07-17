import React from 'react'
import { Redirect } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!user) return <Redirect to="/login" />;

  return <>{children}</>
}

export default ProtectedRoute