import { useEffect, useState } from "react";

function App() {
  const [username, setuserName] = useState("osama");
  const [password, setpassword] = useState("mais");
  const [passwordConfirm, setpasswordConfirm] = useState("maiss");
  const [option, setOption] = useState("1");
  useEffect(() => {
    if (username && password && passwordConfirm && option) {
      console.log(
        `the name is ${username} your password is ${password} 2nd password is ${passwordConfirm} option is ${option} `
      );
    }
  }, [username, password, passwordConfirm, option]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
          value={username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
        />
        <input
          type="text"
          placeholder="password confirm"
          onChange={(e) => {
            setpasswordConfirm(e.target.value);
          }}
          value={passwordConfirm}
        />
        <select
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </div>
  );
}

export default App;
