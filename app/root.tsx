import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
} from "remix";
import type { ActionFunction, MetaFunction, LinksFunction } from "remix";
import stylesUrl from "~/styles/global.css";
import Header from "./components/Header/Header";

export const links: LinksFunction = () => {
  return [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
      rel: "stylesheet",
    },
    { href: stylesUrl, rel: "stylesheet" },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "BMI Calculator" };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  console.log(body);
  return json(body);
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main className="main wrapper">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
