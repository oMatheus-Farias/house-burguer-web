import { Link } from "react-router-dom";

const NavDesktop = () => {
  return (
    <nav>
      <ul className="flex gap-4 text-white font-semibold hover:cursor-pointer">
        <li className="hover:text-primary duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-primary duration-150">
          <Link to="/menu">Cardápio</Link>
        </li>
        <li className="hover:text-primary duration-150">
          <Link to="/order">Faça seu pedido</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
