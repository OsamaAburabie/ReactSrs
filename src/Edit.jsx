import React, { useContext, useState } from "react";
import { MainContext } from "./context/MainContext";

function Edit() {
  const { setusername } = useContext(MainContext);
  const [info, setInfio] = useState("");
  const formSub = (e) => {
    e.preventDefault();
    if (info) {
      setusername(info);
      setInfio("");
    } else {
      console.log(`Please fill the feilds`);
    }
  };
  return (
    <div>
      <form onSubmit={formSub}>
        <input
          type="text"
          onChange={(e) => {
            setInfio(e.target.value);
          }}
          value={info}
        />
        <button type="submit">Click!</button>
      </form>
    </div>
  );
}

export default Edit;
