export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mic Drop</title>
        <meta name="description" content="Open Mic Dashboard for NYC Comedians" />
        <meta
          name="keywords"
          content="nyc comedians, open mics nyc, open mic, open mics, nyc, nyc comedian, comedy open mic"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Qualle Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
