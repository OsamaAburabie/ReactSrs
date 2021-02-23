import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";
function Prop(props) {
  const { username } = useContext(MainContext);

  return <div>Hello from component {username}</div>;
}

export default Prop;
