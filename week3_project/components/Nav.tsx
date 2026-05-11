import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <ThemeToggle />
    </nav>
  );
}