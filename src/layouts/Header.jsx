import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="text-4xl font-semibold">
        Prime Flix
      </Link>
      <Link to="/favorite" className="link bg-blue-500 hover:bg-blue-600">
        Meus favoritos
      </Link>
    </header>
  )
}

export default Header