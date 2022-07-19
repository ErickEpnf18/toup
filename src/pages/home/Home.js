import React from 'react'
import { useAuth } from '../../context/AuthContext';
import Button from "@mui/material/Button";


function Home() {
  const { user, logout } = useAuth();

  console.log("Home", user)

  const handleLogOut = async () => {
    console.log("home, logout", logout)
    await logout();
  }
  return (
    <div>
      {
        user.rol && <h3>Home {user.rol}</h3>
      }
      <h3>Welcome {user.email}</h3>
      <Button onClick={handleLogOut} type="submit" variant="contained" color="primary" fullWidth>
        Cerrar sesión
      </Button>
    </div>
  );
}

export default Home