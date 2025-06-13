import { Form } from "react-router";

export function BookForm({
  book,
}: {
  book?: { id: number; title: string; author: string };
}) {
  return (
    <Form
      className="flex flex-col gap-2"
      method={book ? "PUT" : "POST"}
      action={book ? `/books/${book.id}/edit` : "/books/add"}
    >
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="px-2 py-1 bg-gray-700 rounded-sm border border-white/20"
          id="title"
          name="title"
          type="text"
          defaultValue={book?.title}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="author">
          Author
        </label>
        <input
          className="px-2 py-1 bg-gray-700 rounded-sm border border-white/20"
          id="author"
          name="author"
          type="text"
          defaultValue={book?.author}
          required
        />
      </div>
      <button
        className="bg-gray-300 text-gray-800 font-bold mt-2 py-1 px-4 rounded w-fit items-center cursor-pointer"
        type="submit"
      >
        {book ? "Save" : "Add"}
      </button>
    </Form>
  );
}
