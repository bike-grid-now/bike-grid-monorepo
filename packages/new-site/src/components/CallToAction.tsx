import clsx from "clsx";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export interface CallToActionProps {
  href: string;
  text: string;
  index: number;
}

export default function CallToAction(props: CallToActionProps) {
  return (
    <Link
      href={props.href}
      className={clsx(
        "w-full p-6 odd:bg-zinc-900 even:bg-zinc-800 first:rounded-t-2xl last:rounded-b-2xl flex flex-row justify-between items-center",
        "hover:bg-zinc-700 transition-all duration-150 ease-in-out"
      )}
    >
      <p className="text-white text-xl font-medium">{props.text}</p>
      <MdChevronRight className="text-white fill-current w-7 h-7" />
    </Link>
  );
}
