import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import SortButton from "../../component/button/SortButton";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import Modal from "../../component/commentModals/CommentModal";

import "./page.css";

const Posts = async () => {
  const posts = await sql`SELECT * FROM posts`;

  const orderedPost = await sql`SELECT * FROM posts
  ORDER BY title ASC`;
  console.log(orderedPost);

  // if (searchParams.posts) {
  //   posts = posts.filter((post) => post.id == searchParams.posts);
  // }
  // const sortPosts = async () => {
  //   const orderedPost = await sql`SELECT * FROM posts
  //   ORDER BY title ASC`;
  //   console.log(orderedPost);
  //   return orderedPost;
  // };

  const handleComment = async (formData) => {
    "use server";
    const comment = formData.get("comment");
    const posts_id = formData.get("id");
    await sql`INSERT INTO comments (comment, posts_id) VALUES (${comment}, ${posts_id})`;
    revalidatePath("/");
    redirect("/");
  };

  return (
    <div className="postContainer">
      <h1>Blog Page!!!</h1>
      <div className="cardContainer">
        {posts.rows.map((post) => {
          return (
            <div className="card" key={post.id}>
              <Link href={`posts/${post.id}`}>
                <Card isFooterBlurred radius="lg" className="border-none">
                  <CardHeader>
                    <h3>{post.title}</h3>
                    <p>{post.createdat.toLocaleString()}</p>
                  </CardHeader>
                  <CardFooter>
                    <p>{post.content}</p>
                  </CardFooter>
                </Card>
                <Modal
                  id={post.id}
                  name="comment"
                  type="comment"
                  placeholder="comment"
                  handleComment={handleComment}
                />
              </Link>
            </div>
          );
        })}
        <SortButton handleSort={() => orderedPost}>Reverse</SortButton>
      </div>
    </div>
  );
};

export default Posts;
