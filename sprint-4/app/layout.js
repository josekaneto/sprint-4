import "./globals.css";

export const metadata = {
  icons: {
    icon: "/Logo-branca.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
