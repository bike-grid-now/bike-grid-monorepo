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
    <div
      className={clsx(
        "odd:bg-zinc-900 even:bg-zinc-800 first:rounded-t-2xl last:rounded-b-2xl hover:bg-zinc-700 p-2",
        "transition-all duration-150 ease-in-out"
      )}
    >
      <Link
        href={props.href}
        className={clsx(
          "p-4 flex flex-row justify-between items-center",
          "transition-all duration-150 ease-in-out",
          "focus:outline-none focus:ring focus:ring-white rounded-md"
        )}
      >
        <p className="text-white text-xl font-medium">{props.text}</p>
        <MdChevronRight className="text-white fill-current w-7 h-7" />
      </Link>
    </div>
  );
}
