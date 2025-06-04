import { Book } from "../../../persistence/book";
import type { Route } from "../books/+types/book";
import { redirect } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const book = await Book.findOne({
    where: {
      id: params.id,
    },
  });

  if (book === null) {
    return redirect("/not-found");
  }

  return {
    book: {
      id: book.id,
      title: book.title,
      author: book.author,
    },
  };
}

export default function BookView({ loaderData }: Route.ComponentProps) {
  const { book } = loaderData;
  
  return (
    <div>
      <div>Id: {book.id}</div>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
    </div>
  );
}
