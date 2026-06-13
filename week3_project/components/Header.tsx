import Nav from "./Nav";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <header>
      <h1>Grimaldi’s Atelier</h1>
      <Nav />
      <AuthButton />
    </header>
  );
}