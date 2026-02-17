import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  guild: [
    { label: "Roster", href: "/roster" },
    { label: "Achievements", href: "/achievements" },
    { label: "Raid Schedule", href: "/schedule" },
    { label: "News", href: "/news" },
    { label: "Media", href: "/media" },
  ],
  community: [
    { label: "Apply to Guild", href: "/apply" },
    { label: "Discord", href: "#", external: true },
    { label: "Warcraft Logs", href: "https://classic.warcraftlogs.com/guild/id/476980", external: true },
  ],
  esfand: [
    { label: "Twitch", href: "https://twitch.tv/esfandtv", external: true },
    { label: "YouTube", href: "https://youtube.com/esfandtv", external: true },
    { label: "Twitter / X", href: "https://x.com/EsfandTV", external: true },
    { label: "Instagram", href: "https://instagram.com/esfandtv", external: true },
    { label: "OTK Network", href: "https://otknetwork.com", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-700 border-t border-gold-300/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="CRUSADE Guild"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-cinzel-decorative)] text-lg font-bold text-gold-gradient tracking-wider">
                CRUSADE
              </span>
            </Link>
            <p className="text-sm text-silver-500 leading-relaxed max-w-xs mb-4">
              Official guild of EsfandTV. Forged in Classic, proven in
              Burning Crusade. Where competitive raiding meets genuine
              community.
            </p>
            <p className="text-xs text-silver-600">
              US-Benediction &bull; Horde
            </p>
          </div>

          {/* Guild links */}
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-silver-200 uppercase tracking-[0.2em] mb-4">
              Guild
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.guild.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-500 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-silver-200 uppercase tracking-[0.2em] mb-4">
              Community
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-silver-500 hover:text-gold-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-silver-500 hover:text-gold-300 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Esfand / Social links */}
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-silver-200 uppercase tracking-[0.2em] mb-4">
              EsfandTV
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.esfand.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-silver-500 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-300/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} CRUSADE Guild. Built by{" "}
            <a
              href="https://andersondesigns.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-400 hover:text-gold-300 transition-colors duration-300"
            >
              Anderson Designs
            </a>
          </p>
          <p className="text-xs text-silver-600 text-center sm:text-right">
            World of Warcraft and Blizzard Entertainment are trademarks of
            Blizzard Entertainment, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}