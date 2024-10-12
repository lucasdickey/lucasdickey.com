import Image from "next/image";

import {
  PROFILE_IMAGES,
  PROFILE_NAMES,
  PROFILE_TAGLINES,
} from "../utils/constants";

export default function Home() {
  // Add console logs to debug
  console.log("PROFILE_IMAGES:", PROFILE_IMAGES);
  console.log("PROFILE_NAMES:", PROFILE_NAMES);
  console.log("PROFILE_TAGLINES:", PROFILE_TAGLINES);

  // Select the profile with id 2 (Lucas Dickey)
  const profileId = 2;

  // Use optional chaining and nullish coalescing to handle potential undefined values
  const profileImage =
    PROFILE_IMAGES?.find((img) => img.id === profileId) ?? null;
  const profileName =
    PROFILE_NAMES?.find((n) => n.id === profileId)?.name ?? "Name not found";
  const profileTagline =
    PROFILE_TAGLINES?.find((t) => t.id === profileId)?.tagline ??
    "Tagline not found";

  if (!profileImage) {
    return <div>Profile image not found</div>;
  }

  return (
    <div className="min-h-screen bg-secondary-600 text-dark-600 flex flex-col justify-between p-8">
      <main className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-primary-600">
          <Image
            src={profileImage.src}
            alt={profileImage.alt}
            width={profileImage.width}
            height={profileImage.height}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-wine-600">
          {profileName}
        </h1>
        <h2 className="text-2xl text-center text-accent-600">
          {profileTagline}
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
        © {new Date().getFullYear()} {profileName}. All rights reserved.
      </footer>
    </div>
  );
}
