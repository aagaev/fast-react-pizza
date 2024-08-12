import { formatCurrency } from "../../utils/helper";
// import {
//   addItem,
//   deleteItem,
//   decreaseItemQuantity,
//   increaseItemQuantity,
//   clearCart,
// } from "../cart/cartSlice";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizza.id));
  const isInCart = currentQuantity > 0;
  // console.log(isInCart)
  function handleAddToCart() {
    const { id, name, unitPrice } = pizza;

    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  // const {  name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex gap-4 py-2">
      <img
        src={pizza.imageUrl}
        alt={pizza.name}
        className={`h-24 ${pizza.soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{pizza.name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {pizza.ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!pizza.soldOut ? (
            <p className="text-sm">{formatCurrency(pizza.unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <DeleteItem pizzaId={pizza.id} />
              <UpdateItemQuantity
                pizzaId={pizza.id}
                currentQuantity={currentQuantity}
              />
            </div>
          )}

          {!pizza.soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
MenuItem.propTypes = {
  pizza: PropTypes.any,
};
