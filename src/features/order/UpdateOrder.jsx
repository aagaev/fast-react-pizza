import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button order={order} type="primary">
        Make priority
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

UpdateOrder.propTypes = {
  order: PropTypes.any,
  // isLoadingIngredients: PropTypes.any,
  // ingredients: PropTypes.any,
};

export async function action({ request, params }) {
  console.log(request);
 
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
