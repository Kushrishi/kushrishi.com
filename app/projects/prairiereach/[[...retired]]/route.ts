export function GET() {
  return new Response("This project is no longer public.", {
    status: 410,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
