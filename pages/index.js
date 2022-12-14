import Head from "next/head";
import { Header, Suggestions } from "../components";

const Home = () => (
  <div>
    <Head>
      <title>Stuff Store</title>
      <meta name="description" content="Stuff Store" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <Header />
    </header>

    <main>
      <Suggestions />
    </main>
  </div>
);

export default Home;
