import React, { useContext, useEffect } from "react";

import { authContext } from "../App";

const RedDivTag = ({ value }) => {
  const { user, setUser } = useContext(authContext);

  useEffect(() => {
    setUser({ id: 12, name: "Naveed", email: "karim@gmail.com" });
  }, []);
  return (
    <div>
      <p>user : {user.name}</p>
      <p>value : {value}</p>
    </div>
  );
};

export default RedDivTag;
