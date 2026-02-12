export default function OrdersRootLayout({
  children,
  home,
  tshirt,
}: Readonly<{
  children: React.ReactNode;
  home: React.ReactNode;
  tshirt: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
      <div>{home}</div>
      <div>{tshirt}</div>
    </html>
  );
}
