export default function SocialMedia() {
  return (
    <div className="grid grid-cols-1 ">
      <div className="text-5xl text-white ">Social Media</div>
      <div className="grid sm:gap-2 sm:mr-6 sm:grid-cols-4 lg:grid-cols-10 items-center place-items-center mt-12 mb-24 ">
        <div className="lg:block sm:hidden"></div>
        <div className="lg:block sm:hidden"></div>
        <div className="lg:block sm:hidden"></div>
        <a href="https://twitter.com/robiniaswap">
          <img
            className=""
            src="/images/s1.svg"
            alt="welcome"
            style={{ maxWidth: 70 }}
          />
        </a>
        <a href="https://t.me/officialrobinia">
          <img
            className=""
            src="/images/s2.svg"
            alt="welcome"
            style={{ maxWidth: 70 }}
          />
        </a>
        <a href="https://discord.gg/yEFKUsEsaj">
          <img
            className=""
            src="/images/s3.svg"
            alt="welcome"
            style={{ maxWidth: 70 }}
          />
        </a>

        <a className="" href="https://medium.com/@Blokfield.inc">
          <img
            className=""
            src="/images/s4.svg"
            alt="welcome"
            style={{ maxWidth: 70 }}
          />
        </a>
      </div>
    </div>
  );
}
