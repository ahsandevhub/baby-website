const DavidTweet = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-gray-50"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
        </div>
        <span className="font-bold text-gray-900">@davidmaloneypa</span>
      </div>
      <div className="block">
        <div
          className="twitter-tweet twitter-tweet-rendered"
          style={{
            display: "flex",
            maxWidth: "550px",
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <iframe
            id="twitter-widget-3"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen="true"
            className=""
            title="X Post"
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-3&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1909028048533443069&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=fd7287607d4cd323349a91796816e86359c14e04&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px"
            style={{
              position: "static",
              visibility: "visible",
              width: "441px",
              height: "645px",
              display: "block",
              flexGrow: 1,
            }}
            data-tweet-id="1909028048533443069"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DavidTweet;
