import ContactLinks from "./ContactLinks";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} Plamen Georgiev
        </p>
        <ContactLinks variant="icons" />
      </div>
    </footer>
  );
}
