import "98.css";
import "./globals.css";

export const metadata = {
  title: "cherrydub",
  description: "my homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
