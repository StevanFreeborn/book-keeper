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
    <div className="flex flex-col gap-4 p-4">
      <Link
        className="bg-gray-300 text-gray-800 font-bold py-1 px-4 rounded w-fit items-center"
        to="/books/add"
      >
        Add Book
      </Link>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-2">
        {books.map((b) => (
          <div key={b.id} className="shadow-lg">
            <div className="flex flex-col rounded-t-md items-center relative bg-gradient-to-r from-blue-800 to-indigo-900">
              <img
                src="https://placehold.co/128x198"
                alt={`Cover of ${b.title}`}
              />
              <div className="text-gray-950 absolute bottom-0 left-0 m-2 p-2 bg-white/50 rounded-md">
                <div className="text-lg font-bold">{b.title}</div>
                <div className="text-xs">{b.author}</div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-b-md flex justify-center items-center p-2">
              <Link
                className="bg-gray-300 text-gray-800 font-bold py-1 px-4 rounded items-center w-full text-center"
                to={`/books/${b.id}`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
