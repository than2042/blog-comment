import Link from "next/link";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navContainer">
      <nav className="linkContainer">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/addpost">Create Posts</Link>
      </nav>
    </div>
  );
};

export default Navigation;
