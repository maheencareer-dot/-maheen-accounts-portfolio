import "./globals.css";

export const metadata = {
  title: "Maheen S | Accounts Assistant",
  description: "B.Com graduate with hands-on billing, accounts payable and reconciliation experience in Tally Prime and MS Excel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
