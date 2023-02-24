import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Prime Flix
      </Link>
      <Link to="/favorite" className="btn">
        Meus favoritos
      </Link>
    </header>
  )
}

export default Header