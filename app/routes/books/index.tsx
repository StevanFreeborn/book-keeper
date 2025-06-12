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
    <div className="flex flex-col gap-4">
      <Link to="/books/add">
        <button>Add Book</button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
        {books.map((b) => (
          <div key={b.id} className="w-[400px] rounded-md border">
            <div className="flex flex-col items-center relative">
              <img src="https://placehold.co/128x198" alt={`Cover of ${b.title}`} />
              <div className="absolute bottom-0 left-0 m-2 p-2 bg-white/25 rounded-md">
                <div className="text-lg font-bold">{b.title}</div>
                <div className="text-xs">{b.author}</div>
              </div>
            </div>
            <div className="bg-white rounded-b-md">
              <Link to={`/books/${b.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
