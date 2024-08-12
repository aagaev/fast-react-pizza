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
    <li className="py-3">
      {isLoadingIngredients}
      {ingredients}
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
