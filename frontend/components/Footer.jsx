export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} EstatePrime. All rights reserved.</p>
        <p>Contact: hello@estateprime.com | +1 (555) 872-1100</p>
      </div>
    </footer>
  );
}
