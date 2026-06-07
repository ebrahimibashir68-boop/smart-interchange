import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/validation-key/txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(
          "853f4bc841b4584661d600e8d83f443e74227cf4245b32387330d85166e38164aec36eded8c04f130a15226190f5f9302cfae92838a3142f766cd2f5d241be5e",
          {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
            },
          }
        );
      },
    },
  },
});
