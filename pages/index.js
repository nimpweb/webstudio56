import Head from 'next/head'
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';
import TopHeader from '../components/TopHeader';

export default function Home() {
  const isUnderconstruction = false;
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="./assets/css/styles.css" /> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Webstudio56</title>
        <meta name="description" content="Webstudio56 студия для создания правильного сайта" />
      </Head>

      {isUnderconstruction ? (
        <p className="text-center" style={{ marginTop: 100 }}>
          Webstudio<sup style={{ color: 'green' }}>56</sup>
        </p>
      ) : (
        <>
          <TopHeader />

          <main>
            <MainPage />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
