export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Welcome
          </h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-6xl"
            data-testid="welcome-heading"
          >
            Welcome to Our Platform
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            data-testid="welcome-description"
          >
            We&apos;re excited to have you here. Get started with our platform
            and discover what we have to offer.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
            data-testid="welcome-actions"
          >
            <a
              href="#features"
              className="rounded-md bg-zinc-950 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              data-testid="welcome-get-started-btn"
            >
              Get started
            </a>
            <a
              href="#contact"
              className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700 dark:hover:bg-zinc-800"
              data-testid="welcome-contact-btn"
            >
              Contact us
            </a>
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12 lg:px-16">
          <p className="text-center text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Our Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
