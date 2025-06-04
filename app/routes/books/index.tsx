import { Link } from "react-router";
import { Book } from "../../../persistence/book";
import type { Route } from "./+types/index";

export async function loader() {
  const books = await Book.findAll();

  return {
    books: books.map((b) => ({
      id: b.id,
      title: b.title,
      author: b.author,
    })),
  };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { books } = loaderData;

  return (
    <div>
      <Link to="/books/add">
        <button>Add Book</button>
      </Link>
      {books.map((b) => (
        <div key={b.id}>
          <div>
            <Link to={`/books/${b.id}`}>Id: {b.id}</Link>
          </div>
          <div>Title: {b.title}</div>
          <div>Author: {b.author}</div>
        </div>
      ))}
    </div>
  );
}
