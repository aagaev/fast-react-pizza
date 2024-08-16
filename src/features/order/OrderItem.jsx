import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helper";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  OrderItem.propTypes = {
    item: PropTypes.any,
    isLoadingIngredients: PropTypes.any,
    ingredients: PropTypes.any,
  };
  const { quantity, name, totalPrice } = item;
  // const cashe = { isLoadingIngredients, ingredients };
  // console.log(cashe);
  return (
    <li className="space-y-1 py-3">

      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
