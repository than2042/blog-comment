import { Input, Textarea } from "@nextui-org/react";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Button from "../../component/button/Button";
import "./page.css";

const AddPost = async () => {
  "use server";
  const handleAdd = async (formData) => {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");
    const category_id = formData.get("category_id");
    await sql`INSERT INTO posts (title, content, user_id, category_id) VALUES (${title}, ${content}, 1, ${category_id})`;

    revalidatePath("/posts");
    redirect("/posts");
  };

  const items = await sql`SELECT * FROM categories`;

  return (
    <div className="container">
      <form action={handleAdd}>
        <label htmlFor="name">Title:</label>
        <Input
          className="input"
          name="title"
          type="title"
          placeholder="Title"
          autoFocus
        />
        <label htmlFor="name">Content:</label>
        <Textarea
          className="textarea"
          id="textarea"
          name="content"
          type="content"
          placeholder="Content"
        />
        <label for="pet-select">Choose a Categories:</label>
        <select name="category_id">
          <option>---Please choose an option</option>
          {items.rows.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <Button className="addBtn"> Submit </Button>
      </form>
    </div>
  );
};

export default AddPost;
