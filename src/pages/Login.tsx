import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../auth/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: string } };

  const from = location.state?.from || "/";

  function handleLogin() {
    login();
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
