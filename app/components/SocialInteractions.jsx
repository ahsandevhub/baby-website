"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const SocialInteractions = () => {
  const [twitterLoaded, setTwitterLoaded] = useState(false);

  // Media coverage data
  const articles = [
    {
      title:
        "Authorities Confiscated a Beloved Deer That a Woman Raised as a Pet — and Now the Animal Might Be Euthanized",
      source: "People",
      date: "March 1, 2025",
      excerpt:
        'The deer, named "Baby," has been raised by the woman — along with residents of Pennsylvania\'s Fayette County — since he was a fawn',
      url: "https://people.com/authorities-confiscated-beloved-deer-that-woman-raised-as-pet-in-pennsylvania-11688112",
      image: "/media/people.jpg",
    },
    {
      title:
        "Woman Arrested, Has Pet Deer Confiscated After Officials Say She Kept Animal Illegally",
      source: "Huffpost",
      date: "Mar 1, 2025",
      excerpt:
        "Game wardens could be seen dragging the deer, named Baby, by a rope in a video obtained by a local news outlet.",
      url: "https://www.huffpost.com/entry/baby-deer-confiscated-pennsylvania_n_67c389c8e4b0bb60c6985c8f",
      image: "/media/huffpost.png",
    },
    {
      title:
        "Pennsylvania Game Commission confiscates castrated buck with antlers removed that was kept as pet",
      source: "Outdoor News",
      date: "March 6, 2025",
      excerpt:
        "Tammy Shiery, 64, was arrested Feb. 25 when she tried to prevent state game wardens from seizing a two-year-old buck the Pennsylvania Game Commission alleges she illegally adopted and kept at her Bullskin Township home.",
      url: "https://www.outdoornews.com/2025/03/06/pennsylvania-game-commission-confiscates-castrated-buck-with-antlers-removed-that-was-kept-as-pet/",
      image: "/media/outdoor-post.png",
    },
    // {
    //   title:
    //     "Fayette County woman arrested after refusing to surrender pet deer",
    //   source: "Pittsburgh Post-Gazette",
    //   date: "February 27, 2025",
    //   excerpt:
    //     "A Fayette County woman was arrested after trying to prevent the Pennsylvania Game Commission from removing a wild deer from her property that she claimed was her pet",
    //   url: "https://www.post-gazette.com/news/crime-courts/2025/02/27/pet-deer-arrest-fayette-county-pennsylvania/stories/202502270110",
    //   image: "/media/pitushburg-post.png",
    // },
  ];

  // Twitter/X posts with direct embed URLs
  const tweets = [
    {
      url: "https://twitter.com/elonmusk/status/1896224487491997733",
      handle: "@elonmusk",
    },
    {
      url: "https://twitter.com/mtgreenee/status/1896674837835431967",
      handle: "@mtgreenee",
    },
    {
      url: "https://twitter.com/davidmaloneypa/status/1907752846117798351?s=46&t=d8b8rq8SqTvhA3NSEZytJw",
      handle: "@davidmaloneypa",
    },
    {
      url: "https://twitter.com/JondavidRLongo/status/1897737071499841894",
      handle: "@JondavidRLongo",
    },
  ];

  // YouTube videos
  const videos = [
    {
      title:
        "Pennsylvania woman says a wild deer was her pet. Game Commission says that's illegal.",
      source: "YouTube",
      url: "https://www.youtube.com/embed/ooxA__Mt3zc",
      thumbnail: "https://img.youtube.com/vi/ooxA__Mt3zc/maxresdefault.jpg",
    },
    {
      title:
        "Pennsylvania Game Commission defends taking Fayette County woman's illegal pet deer",
      source: "YouTube",
      url: "https://www.youtube.com/embed/fdhKlGOH-9g",
      thumbnail: "https://img.youtube.com/vi/fdhKlGOH-9g/maxresdefault.jpg",
    },
  ];

  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.onload = () => setTwitterLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="media" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          The Movement for Baby
        </h2>

        {/* Media Coverage Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-blue-800">
            Media Coverage
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {article.source}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Social Media Reaction */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-blue-800">
            Social Media Outcry
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tweets.map((tweet, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                    <FaXTwitter className="text-gray-50" size={20} />
                  </div>
                  <span className="font-bold text-gray-900">
                    {tweet.handle}
                  </span>
                </div>

                {/* Skeleton Loading */}
                {!twitterLoaded && (
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-48 bg-gray-200 rounded mt-4"></div>
                  </div>
                )}

                {/* Twitter Embed */}
                <div className={twitterLoaded ? "block" : "hidden"}>
                  <blockquote className="twitter-tweet">
                    <a href={tweet.url}></a>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Coverage */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-blue-800">
            Video Coverage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="aspect-video rounded-xl overflow-hidden shadow-md mb-3">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{video.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{video.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Join the Conversation
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            The story of Baby The Deer has touched thousands. Share your
            thoughts and help us demand accountability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=Justice%20for%20Baby%20The%20Deer%20%23SaveBabyDeer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Tweet #SaveBabyDeer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialInteractions;
