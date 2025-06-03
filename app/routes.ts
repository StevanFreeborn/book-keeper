import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("books/add", "routes/books/add.tsx"),
  route("books/:id", "routes/books/book.tsx"),
] satisfies RouteConfig;
