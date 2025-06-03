import { Form, redirect } from "react-router";
import type { Route } from "../+types/home";
import { Book } from "../../../persistence/book";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const author = formData.get("author");

  if (typeof title !== "string") {
    return Response.error();
  }

  if (typeof author !== "string") {
    return Response.error();
  }

  await Book.sync();

  const book = await Book.create({
    title: title,
    author: author,
  });

  return redirect(`/books/${book.id}`);
}

export default function AddBookView() {
  return (
    <div>
      <Form action="/books/add" method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" required />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input id="author" name="author" type="text" required />
        </div>
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}
