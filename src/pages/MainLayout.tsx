import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/posts">Posts</Link>
      </nav>

      <hr />

      {/* Pages will render here */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
