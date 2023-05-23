import "./globals.css";
import "98.css";

export const metadata = {
  title: "cherrydub",
  description: "welcome to the past",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
