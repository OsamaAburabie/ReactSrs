import { useEffect, useState } from "react";

function App() {
  const initial = {
    username: "",
    password: "",
    confirm: "",
  };
  const [formData, setFormData] = useState(initial);
  const [err, setErr] = useState("");
  const fromSub = (e) => {
    e.preventDefault();
    const { username, password, confirm } = formData;
    if (username && password && confirm) {
      console.log(`successfull`);
      setFormData(initial);
    } else {
      console.log(`not succesfful`);
    }
  };
  return (
    <div>
      <form onSubmit={fromSub}>
        <label>{err}</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
          value={formData.username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
        />
        <input
          type="text"
          placeholder="password confirm"
          onChange={(e) => {
            setFormData({ ...formData, confirm: e.target.value });
          }}
          value={formData.confirm}
        />
        {/* <select
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="1">1</option>
        </select> */}
        <button type="submit">Click me</button>
      </form>
    </div>
  );
}

export default App;
