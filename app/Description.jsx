const Description = () => {
  return (
    <div
      className="relative pt-20 pb-20"
      style={{
        background: "radial-gradient(circle at center, #c4103d, #be123c)",
      }}
    >
      <div className="absolute -top-18 z-10 left-1/2 -translate-x-1/2 text-white">
        <h3 className="text-2xl text-center mb-2 font-semibold">
          Contract Address
        </h3>
        <p className="text-lg rounded-xl bg-black px-10 py-4 border-[3px] border-white">
          6pKHwNCpzgZuC9o5FzvCZkYSUGfQddhUYtMyDbEVpump
        </p>
      </div>
      <div className="container text-white mt-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-5">
          Deer Seized by US Government
        </h1>
        <div className="content text-lg space-y-4">
          <p>
            The story of Baby the Deer has gone viral, with many people
            supporting his return to Tommy Bailey, who rescued him as a fawn and
            has cared for him for a year. At the time of the incident, Baby’s
            unusual behavior sparked conversation among residents of Bristol,
            leading to a response from wildlife authorities (initially
            considering rehabilitation, though charges were later dropped).
          </p>
          <p>
            On March 4, the Game Commission confirmed Baby was taken to a
            licensed facility for permanent care, but did not disclose its
            location or provide an update on his condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
