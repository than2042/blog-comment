import Link from "next/link";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navContainer">
      <nav className="linkContainer">
        <Link href="/" replace prefetch={false}>
          Home
        </Link>
        <Link href="/posts" replace prefetch={false}>
          Posts
        </Link>
        <Link href="/addpost" replace prefetch={false}>
          Create Posts
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
