import Head from "next/head";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Baby The Deer | #JusticeForBaby</title>
        <meta
          name="description"
          content="Join the movement to hold the PA Game Commission accountable and protect animal rights"
        />
      </Head>

      <Header />

      <main className="flex-grow">
        <Hero />
        <Details />
      </main>

      <Footer />
    </div>
  );
}
