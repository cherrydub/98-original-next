import "./globals.css";
import "98.css";

export const metadata = {
  title: "cherrydub",
  description: "my homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
