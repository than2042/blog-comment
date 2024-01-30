import { sql } from "@vercel/postgres";
import Image from "next/image";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import Link from "next/link";
import "./page.css";

const SinglePost = async ({ params }) => {
  ("use server");
  const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;

  const comments =
    await sql`SELECT * FROM comments WHERE posts_id = ${params.id}`;

  // const orderedPost = await sql`SELECT * FROM posts ORDER BY title ASC`;

  // const handleCommentEdit = async (formData) => {
  //   "use server";
  //   const comment = formData.get("comment");
  //   console.log(comment, "comment");
  //   // const posts_id = formData.get("id");
  //   await sql`Update comments SET comment = ${comment} WHERE posts_id = ${params.id}`;
  //   revalidatePath(`/posts/${params.id}`);
  //   redirect(`/posts/${params.id}`);
  // };

  let categoryImg = "/assets/art.jpg";

  return (
    <div className="singlePost">
      {post.rows && (
        <div className="displaySingle">
          <h3>{post.rows[0].title}</h3>
          <p>{post.rows[0].content}</p>
          <Image width={500} height={400} src={categoryImg} alt={categoryImg} />
          {comments.rows.map((comment) => (
            <>
              <p key={comment.id}>{comment.comment}</p>
              <Link href={`/posts/${params.id}/comments/${comment.id}`}>
                Edit Comment
              </Link>
            </>
          ))}

          {/* <form action={handleCommentEdit} method="post">
            <input type="text" name="comment" value={comments.comment} />
            <button className="edit" type="submit">
              Edit Comment
            </button>
          </form> */}
        </div>
      )}
      {/* <div>
        {orderedPost.rows && (
          <div key={orderedPost.rows.id}>
            <h3>{orderedPost.rows.title}</h3>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SinglePost;
