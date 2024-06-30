import CreateUser from "../features/user/CreateUser";


function Home() {
  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl front-semibold md:text-3xl">
        The best pizza.Straight out of the oven, straight to you
        <br />
        <span className='text-yellow-500' >Straight out of the oven, straight to you</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
