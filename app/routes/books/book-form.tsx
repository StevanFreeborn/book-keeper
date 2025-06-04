import { Form } from "react-router";

export function BookForm({
  book,
}: {
  book?: { id: number; title: string; author: string };
}) {
  return (
    <Form
      method={book ? "PUT" : "POST"}
      action={book ? `/books/${book.id}/edit` : "/books/add"}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={book?.title}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          defaultValue={book?.author}
          required
        />
      </div>
      <button type="submit">{book ? "Save" : "Add"}</button>
    </Form>
  );
}
