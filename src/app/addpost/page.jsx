import Button from "../../component/button/Button";
import Input from "../../component/input/Input";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "./page.css";

const AddPost = () => {
  const handleAdd = async (formData) => {
    "use server";

    const title = formData.get(title);
    const content = formData.get(content);
    await sql`INSERT INTO posts (title, content, user_id, category_id)`;
    revalidatePath("/");
    redirect("/");
  };
  return (
    <div className="container">
      <form action={handleAdd}>
        <Input name="title" type="title" placeholder="Title" autoFocus />
        <Input name="content" type="content" placeholder="Content" />
        <Button> Submit </Button>
      </form>
    </div>
  );
};

export default AddPost;
