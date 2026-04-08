export const metadata = {
  title: "Marama | Boutique Property Care on the Costa Blanca",
  description: "Professional absentee property care for villa owners on the Costa Blanca. Monthly inspections, administrative shield, okupa protection — in English, Czech and Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
