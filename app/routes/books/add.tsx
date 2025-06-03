import { Form } from "react-router";
import type { Route } from "../+types/home";

export async function action({
  request
}: Route.ActionArgs) {
  const formData = await request.formData();
  console.log(formData);
}

export default function AddBook() {
  return <div>
    <Form action="/books/add" method="POST">
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text"/>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input id="author" name="author" type="text"/>
      </div>
      <button type="submit">Add</button>
    </Form>
  </div>
}
