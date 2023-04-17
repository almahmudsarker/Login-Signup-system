import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h3>This is Home</h3>
      {user && <span>Logged in user: {user.displayName}</span>}
    </div>
  );
};

export default Home;
