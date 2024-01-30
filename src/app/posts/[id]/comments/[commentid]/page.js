import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const EditComment = async ({ params }) => {
  const comments =
    await sql`SELECT * FROM comments WHERE id = ${params.commentid}`;
  console.log(comments, "comments");

  const handleEditComment = async (formData) => {
    "use server";
    const comment = formData.get("comment");
    await sql`UPDATE comments SET comment = ${comment} WHERE id = ${params.commentid}`;
    revalidatePath(`/posts/${params.id}`);
    redirect(`/posts/${params.id}`);
  };
  return (
    <div>
      <h3>Edit comment</h3>
      <form action={handleEditComment}>
        <textarea
          name="comment"
          placeholder="Edit Comment"
          defaultValue={comments.rows[0].comment}
        ></textarea>
        <button>Edit Comment</button>
      </form>
    </div>
  );
};

export default EditComment;
