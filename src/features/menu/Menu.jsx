import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
// import { formatCurrency } from "../../utils/helper";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.name} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return await menu;
}

export default Menu;
