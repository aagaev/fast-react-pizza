import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between items-center text-sm  px-4 py-3 md:text-base bg-stone-800 text-stone-200 uppercase sm: px-6">
      <p className="text-stone-300 text font-semobold space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
