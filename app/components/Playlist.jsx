"use client";

import { FaSoundcloud } from "react-icons/fa";

const Playlist = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
        Baby The Deer Playlist
      </h2>

      <iframe
        width="100%"
        height="450"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/babythedeer&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="mb-6 rounded-lg shadow-md"
      ></iframe>

      <div className="text-center">
        <a
          href="https://m.soundcloud.com/babythedeer"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 flex justify-center w-max mx-auto items-center gap-2 hover:bg-blue-200 text-blue-700 px-5 py-2 rounded-full transition-colors"
          aria-label="SoundCloud"
        >
          <FaSoundcloud className="text-2xl" />
          <span className="text-sm">Listen on SoundCloud</span>
        </a>
      </div>
    </div>
  );
};

export default Playlist;
