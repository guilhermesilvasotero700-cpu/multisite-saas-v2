export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ background: "red" }}>
        {children}
      </body>
    </html>
  );
}