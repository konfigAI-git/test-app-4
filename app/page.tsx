import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl text-center space-y-8">
          {/* Hero Section */}
          <section className="space-y-6 animate-fade-in-up">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              data-testid="hero-heading"
            >
              Something Big is <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Coming Soon
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto"
              data-testid="hero-subheading"
            >
              We&apos;re working on something amazing that will change the way you
              experience the web. Get ready for an unforgettable journey.
            </p>
          </section>

          {/* Countdown Timer */}
          <section className="py-8" data-testid="countdown-section">
            <CountdownTimer />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-indigo-200 text-sm">
        <p data-testid="footer-text">
          &copy; {new Date().getFullYear()} Your Project. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
