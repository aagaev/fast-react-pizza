import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  console.log(isLoading);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll md:overflow-auto">
          <main className="mx-auto max-w-3xl bg-pink-200">
            <Outlet />
          </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
