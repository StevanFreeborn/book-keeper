import { Book } from "../../../persistence/book";
import type { Route } from "./+types/book";
import { data, Form, Link, redirect } from "react-router";

export async function action({ params }: Route.ActionArgs) {
  await Book.destroy({
    where: {
      id: params.id,
    }
  })

  return redirect("/books")
}

export async function loader({ params }: Route.LoaderArgs) {
  const book = await Book.findOne({
    where: {
      id: params.id,
    },
  });

  if (book === null) {
    throw data("Book not found", { status: 404 })
  }

  return {
    book: {
      title: book.title,
      author: book.author,
    },
  };
}

export default function BookView({ params, loaderData }: Route.ComponentProps) {
  const { book } = loaderData;
  
  return (
    <div>
      <Link to={`/books/${params.id}/edit`}>
        Edit
      </Link>
      <div>Id: {params.id}</div>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      <Form method="DELETE">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
