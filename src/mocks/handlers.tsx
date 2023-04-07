// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(
    "https:www.api.com/stories",
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
