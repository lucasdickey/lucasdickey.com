import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-600 text-dark-600 flex flex-col justify-between p-8">
      <main className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-primary-600">
          <Image
            src="/images/lucas-digital.jpg"
            alt="Lucas Dickey"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-wine-600">
          Lucas Dickey
        </h1>
        <h2 className="text-2xl text-center text-accent-600">
          Apsiring polymath; aspiring to humility; a lot going on up there
        </h2>
        <div className="bg-dark-600 text-secondary-600 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com/lucasdickey4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                Twitter: @lucasdickey4
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lucasdickey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                LinkedIn: @lucasdickey
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                GitHub
              </a>
            </li>
            {/* Add more social links as needed */}
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-center text-sm text-dark-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
