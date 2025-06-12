import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/books/index.tsx", { id: 'index' }),
  ...prefix("books", [
    index("routes/books/index.tsx"),
    route("add", "routes/books/add.tsx"),
    route(":id", "routes/books/book.tsx"),
    route(":id/edit", "routes/books/edit.tsx"),
  ]),
] satisfies RouteConfig;
