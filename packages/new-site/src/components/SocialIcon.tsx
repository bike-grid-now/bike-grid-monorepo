import Link from "next/link";

export interface SocialIconProps {
  icon: React.FC<{ className?: string }>;
  href: string;
}

export default function SocialIcon({ href, icon: Icon }: SocialIconProps) {
  return (
    <Link href={href} target="_blank">
      <Icon className="text-white fill-current w-7 h-7" />
    </Link>
  );
}
