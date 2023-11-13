import "../../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html dir="rtl" lang="fa-IR">
      <head>
        <title>Inonext</title>
      </head>
      <body className="font-Dana">{children}</body>
    </html>
  );
}
