const NavDesktop = () => {
  return (
    <nav>
      <ul className="flex gap-4 text-white font-semibold hover:cursor-pointer">
        <li className="hover:text-primary">Home</li>
        <li className="hover:text-primary">Cardápio</li>
        <li className="hover:text-primary">Faça seu pedido</li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
