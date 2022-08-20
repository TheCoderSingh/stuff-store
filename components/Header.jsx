import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => (
  <div className="header">
    <Link href="/">Stuff Store</Link>
    <input placeholder="Search on Stuff Store" />
    <FaShoppingCart size={30} />
  </div>
);

export default Header;
