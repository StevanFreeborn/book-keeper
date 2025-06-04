import { data, redirect } from "react-router";
import type { Route } from "./+types/edit";
import { Book } from "../../../persistence/book";
import { BookForm } from "./book-form";

export async function action({ params, request }: Route.ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const author = formData.get("author");

  if (typeof title !== "string") {
    return Response.error();
  }

  if (typeof author !== "string") {
    return Response.error();
  }

  await Book.update(
    {
      title: title,
      author: author,
    },
    {
      where: {
        id: params.id,
      },
    }
  );

  return redirect(`/books/${params.id}`);
}

export async function loader({ params }: Route.LoaderArgs) {
  const book = await Book.findOne({
    where: {
      id: params.id,
    },
  });

  if (book === null) {
    throw data("Book not found", { status: 404 });
  }

  return {
    book: {
      id: book.id,
      title: book.title,
      author: book.author,
    },
  };
}

export default function EditBook({ loaderData }: Route.ComponentProps) {
  const { book } = loaderData;

  return (
    <div>
      <BookForm book={book} />
    </div>
  );
}
