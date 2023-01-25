import Link from "next/link";

export interface SocialIconProps {
  icon: React.FC<{ className?: string }>;
  href: string;
}

export default function SocialIcon({ href, icon: Icon }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="focus:outline-none focus:ring focus:ring-white bg-zinc-900 rounded-full p-3 transition-all duration-150 ease-in-out hover:bg-zinc-700"
    >
      <Icon className="text-white fill-current w-7 h-7" />
    </Link>
  );
}
