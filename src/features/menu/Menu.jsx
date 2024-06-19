import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helper";

// import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <li key={pizza.id}>
          <img src={pizza.imageUrl} alt={pizza.name} />
          <div>
            <p>{pizza.name}</p>
            <p>{pizza.ingredients.join(", ")}</p>
            <div>
              {!pizza.soldOut ? (
                <p>{formatCurrency(pizza.unitPrice)}</p>
              ) : (
                <p>Sold out</p>
              )}
            </div>
          </div>
        </li>
      ))}
      {/* {menu.map((item) => (
        <MenuItem pizza={item} key={item.name} />
      ))} */}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return await menu;
}

export default Menu;
