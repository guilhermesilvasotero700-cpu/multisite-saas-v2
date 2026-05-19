export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ background: "blue", color: "white" }}>
        {children}
      </body>
    </html>
  );
}