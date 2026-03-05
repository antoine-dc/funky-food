import { Link } from "react-router";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <h2>Notre Menu Groovy</h2>
      <p>Des plats sélectionnés qui vont vous époustoufler ! 🌈✨</p>
      <Link to="/about">
        <button>A propos de nous</button>
      </Link>
    </>
  );
}
