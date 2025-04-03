import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Easter | $EGGS | Meme Token Market</title>
        <meta name="description" content="Meme-driven market where every egg holds value. Join the $EGGS movement today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Fixed Buy Button with Bounce Animation */}
      <a
        href="https://pancakeswap.finance/swap"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-50 hover:scale-110 transition-transform animate-bounce"
      >
        <img
          src="/buy-eggs2.png"
          alt="Buy $EGGS"
          className="w-[100px] sm:w-[100px] md:w-[140px]"
        />
      </a>

      {/* Background Layer with blur */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-[#D8AC34] bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url('/bg-characters-3.png')" }}
      >
        <div className="w-full h-full backdrop-blur-[2px]" />
      </div>

      <main className="relative px-4 py-20 flex flex-col items-center text-center font-poppins">
        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Logo Image */}
          <img
            src="/easter-eggs-logo.png"
            alt="Easter $EGGS Logo"
            className="w-[300px] sm:w-[350px] md:w-[400px] drop-shadow-lg"
          />

          {/* Tagline Image */}
          <img
            src="/tagline-eggs.png"
            alt="The most valuable Eggs on chain"
            className="mt-[-60px] w-[200px] sm:w-[150px] md:w-[250px] inline-block align-top"
          />

          {/* Social Icons */}
          <div className="mt-2 flex flex-wrap justify-center gap-6">
            <a href="https://twitter.com/eastereggs_bsc" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/x.png"
                alt="X (Twitter)"
                className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] transition-all transform hover:scale-110 hover:rotate-6"
              />
            </a>
            <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/dexscreener.png"
                alt="Dexscreener"
                className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] transition-all transform hover:scale-110 hover:rotate-6"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/telegram.png"
                alt="Telegram"
                className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] transition-all transform hover:scale-110 hover:rotate-6"
              />
            </a>
          </div>

          {/* About Us Image Section */}
          <div className="mt-10 px-4 flex justify-center">
            <img
              src="/about-us.png"
              alt="About Easter $EGGS"
              className="w-full max-w-3xl rounded-lg shadow-none"
            />
          </div>

          {/* Tokenomics Section */}
          <div className="mt-12 flex flex-col items-center w-full">
            <img
              src="/tokenomics.png"
              alt="Tokenomics"
              className="w-[160px] sm:w-[200px] md:w-[240px] mb-6"
            />
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <img
                src="/tokenomics/supply.jpeg"
                alt="Supply 1 Billion"
                className="w-[250px] rounded-lg shadow-md"
              />
              <img
                src="/tokenomics/tax.jpeg"
                alt="0% Tax"
                className="w-[250px] rounded-lg shadow-md"
              />
              <img
                src="/tokenomics/liquidity.jpeg"
                alt="Liquidity Locked"
                className="w-[250px] rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12 flex flex-col items-center w-full">
            <img
              src="/gallery-header.png"
              alt="Gallery"
              className="w-[160px] sm:w-[200px] md:w-[240px] mb-6"
            />
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <img
                src="/gallery/egg1.png"
                alt="Gallery Image 1"
                className="w-[500px] h-auto rounded-lg shadow-md"
              />
              <img
                src="/gallery/egg2.png"
                alt="Gallery Image 2"
                className="w-[500px] h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-2 text-center">
        <p className="text-xs font-poppins">&copy; 2025 Easter $EGGS. All rights reserved.</p>
      </footer>
    </>
  );
}