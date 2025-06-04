import { redirect } from "react-router";
import type { Route } from "./+types/add";
import { Book } from "../../../persistence/book";
import { BookForm } from "./book-form";

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

  const book = await Book.create({
    title: title,
    author: author,
  });

  return redirect(`/books/${book.id}`);
}

export default function AddBook() {
  return (
    <div>
      <BookForm />
    </div>
  );
}
