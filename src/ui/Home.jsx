import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  console.log(username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="front-semibold mb-8 text-xl md:text-3xl">
        The best pizza.Straight out of the oven, straight to you
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
