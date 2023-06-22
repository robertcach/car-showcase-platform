import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-4">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <Link href={`/brands/${link.id}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
