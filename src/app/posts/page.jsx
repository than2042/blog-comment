import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import CommentModal from "../../component/commentModals/CommentModal";

import "./page.css";

const Posts = async ({ searchParams }) => {
  let sqlQuery = `SELECT * FROM posts`;

  if (searchParams.sort === "asc") {
    sqlQuery += " ORDER BY LOWER(title) ASC";
  } else {
    sqlQuery += " ORDER BY LOWER(title) DESC";
  }
  const posts = await sql.query(sqlQuery);

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
      <Link href="/posts?sort=asc">
        Display {searchParams.sort === "asc" ? "Descending" : "Ascending"}
      </Link>
      <div className="cardContainer">
        {posts.rows.map((post) => {
          return (
            <div className="card" key={post.id}>
              <div>
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
                </Link>
              </div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
