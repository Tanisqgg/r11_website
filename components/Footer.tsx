export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-6 w-6" />
          <span>© {new Date().getFullYear()} redelevenlabs</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="mailto:hr@redelevenlabs.com" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
