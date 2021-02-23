const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const [formData, setFormData] = useState(initialState);
const [msg, setMsg] = useState("");
const [err, setErr] = useState(false);

const submitForm = (e) => {
  e.preventDefault();
  const { username, email, password, passwordConfirm } = formData;

  if (username && email && password && passwordConfirm) {
    if (password === passwordConfirm) {
      setFormData(initialState);
      setMsg(
        `Your regesteration is completed username: ${username} email: ${email}`
      );
      setErr(false);
    } else {
      setMsg(`Your passwords are not matched`);
      setErr(true);
    }
  } else {
    setMsg(`Please fill all feilds`);
    setErr(true);
  }
};
