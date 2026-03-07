export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Mehdi Salhi
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/medysaly" },
            { label: "LinkedIn", href: "https://linkedin.com/in/mehdi-salhi-work" },
            { label: "X", href: "https://x.com/medysaly" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-600 transition-colors hover:text-neutral-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
