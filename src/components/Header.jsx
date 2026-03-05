import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>🍕 FUNKY FOOD ! 🌮</h1>
        </Link>
        <p>Où la saveur rencontre l'ambiance !</p>
      </header>
    </>
  );
}
