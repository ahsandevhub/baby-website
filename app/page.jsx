import Head from "next/head";
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

        {/* Additional sections can be added here */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Baby's Story
          </h2>
          <div className="max-w-3xl mx-auto text-center text-blue-800">
            <p className="mb-6">
              Nearly two years ago, a fawn took over the hearts of a
              Pennsylvania community. Now, his story has ignited Americans to
              join forces to seek #JusticeForBaby.
            </p>
            <a
              href="https://babythedeer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Read Full Story
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
