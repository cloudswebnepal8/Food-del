import hero from "../assets/image.png";

const header = () => {
  return (
    <div className="relative mt-4">

      <img
        src={hero}
        className="w-full h-[540px] object-cover rounded-3xl"
      />

      <div className="absolute left-24 top-1/2 -translate-y-1/2 max-w-xl">

        <h1 className="text-white text-7xl font-bold leading-tight">
          Order your
          <br />
          favorite
          <br />
          food here
        </h1>

        <p className="text-white mt-8 text-lg leading-8">
          Choose from a diverse menu featuring a delectable
          array of dishes crafted with the finest ingredients
          and culinary expertise. Our mission is to satisfy
          your cravings and elevate your dining experience,
          one delicious meal at a time.
        </p>

        <button className="mt-10 bg-white text-gray-700 px-10 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white duration-300">
          View Menu
        </button>

      </div>

    </div>
  );
};

export default header;