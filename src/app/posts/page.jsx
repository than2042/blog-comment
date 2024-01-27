import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import CommentModal from "../../component/commentModals/CommentModal";

import "./page.css";

const Posts = async () => {
  const posts = await sql`SELECT * FROM posts`;

  const orderedPost = await sql`SELECT * FROM posts
  ORDER BY title ASC`;

  // post comment into database
  const handleComment = async (formData) => {
    "use server";
    const comment = formData.get("comment");
    const posts_id = formData.get("id");
    await sql`INSERT INTO comments (comment, posts_id) VALUES (${comment}, ${posts_id})`;
    revalidatePath("/posts");
    redirect("/posts");
  };

  // delete data
  const handleDelete = async (formData) => {
    "use server";
    const post_id = formData.get("id");
    await sql`DELETE FROM comments WHERE posts_id = ${post_id}`;
    await sql`DELETE FROM posts WHERE id = ${post_id};`;
    revalidatePath("/posts");
    redirect("/posts");
  };

  return (
    <div className="postContainer">
      <h1>Blog Page!!!</h1>
      <div className="cardContainer">
        {posts.rows.map((post) => {
          return (
            <div className="card" key={post.id}>
              {/* <Link href={`posts/${post.id}`}> */}
              <Card isFooterBlurred radius="lg" className="border-none">
                <CardHeader>
                  <h3>{post.title}</h3>
                  <p>{post.createdat.toLocaleString()}</p>
                </CardHeader>
                <CardFooter>
                  <p>{post.content}</p>
                </CardFooter>
              </Card>

              <CommentModal
                id={post.id}
                name="comment"
                type="comment"
                placeholder="comment"
                handleComment={handleComment}
              />
              <form action={handleDelete} method="post">
                <input type="hidden" name="id" value={post.id} />
                <button className="danger" type="submit">
                  Delete
                </button>
              </form>

              {/* </Link> */}
            </div>
          );
        })}
      </div>
      {orderedPost.rows.map((item) => {
        return (
          <Link href={`posts/${item.id}`} key={item.id}>
            <div key={item.id}>
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
