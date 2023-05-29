import "./globals.css";
import "98.css";

export const metadata = {
  title: "cherrydub",
  description: "my homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <body>{children}</body>
    </html>
  );
}
