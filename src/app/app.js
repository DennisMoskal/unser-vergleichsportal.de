mport Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Optional: Für ältere Browser oder Apple-Geräte */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
