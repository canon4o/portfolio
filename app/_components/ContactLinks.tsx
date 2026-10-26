import { EmailIcon, GitHubIcon, LinkedInIcon } from "./ContactIcons";

const contactLinks = [
  { label: "Email", href: "mailto:plamen91@gmail.com", icon: EmailIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/plamen-georgiev-07337894",
    icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/canon4o", icon: GitHubIcon },
];

const variantClassNames = {
  buttons: {
    list: "flex flex-wrap gap-3",
    primary:
      "inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 font-mono text-sm font-medium text-zinc-50 transition-opacity hover:opacity-85",
    secondary:
      "inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-surface px-4 py-2 font-mono text-sm text-zinc-800 transition-colors hover:border-accent hover:text-accent",
  },
  icons: {
    list: "flex gap-4",
    primary: "text-zinc-500 transition-colors hover:text-accent",
    secondary: "text-zinc-500 transition-colors hover:text-accent",
  },
};

type ContactLinksProps = {
  variant?: keyof typeof variantClassNames;
};

export default function ContactLinks({ variant = "buttons" }: ContactLinksProps) {
  const classNames = variantClassNames[variant];

  return (
    <div className={classNames.list}>
      {contactLinks.map(({ label, href, icon: Icon }, index) => (
        <a
          key={label}
          href={href}
          className={index === 0 ? classNames.primary : classNames.secondary}
          aria-label={variant === "icons" ? label : undefined}
          {...(href.startsWith("http") && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          <Icon className={variant === "icons" ? "h-5 w-5" : "h-4 w-4"} />
          {variant === "buttons" && label}
        </a>
      ))}
    </div>
  );
}
