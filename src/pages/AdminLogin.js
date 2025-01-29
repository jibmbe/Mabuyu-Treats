import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setAdminAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!password) {
      setError("Password cannot be empty");
      return;
    }

    if (password === "admin123") { // Change this to a more secure method in production
      setAdminAuthenticated(true);
      navigate("/admin/orders");
    } else {
      setError("Incorrect password! Access denied.");
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <div className="input-container">
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
