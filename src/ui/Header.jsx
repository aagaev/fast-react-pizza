import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className='flex items-center justify-between border-b border-stone-600 bg-yellow-300 uppercase px-4  py-3 sm: px-6'>
      <Link className="tracking-widest" to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
