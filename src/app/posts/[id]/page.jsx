import { sql } from "@vercel/postgres";
import Image from "next/image";
import "./page.css";

const SinglePost = async ({ params }) => {
  ("use server");
  const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;

  const images = {
    art: "/assets/art.jpg",
    design: "/assets/design.jpg",
    food: "/assets/food.jpg",
    health: "/assets/health.jpg",
    tech: "/assets/tech.jpg",
  };

  let categoryImg = "/assets/art.jpg";
  if (post.rows && post.rows.length > 0) {
    const category = post.rows[0].category;
    categoryImg = images[category] || categoryImg;
  }

  return (
    <div className="singlePost">
      {post.rows && (
        <div className="displaySingle">
          <h3>{post.rows[0].title}</h3>
          <p>{post.rows[0].content}</p>
          <Image
            width={900}
            height={600}
            src={categoryImg}
            alt={`Category ${post.rows[0].category}`}
          />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
