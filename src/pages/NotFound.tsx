import { Link } from "react-router";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFound