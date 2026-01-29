import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }
  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  navigate("/posts");
}



  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
