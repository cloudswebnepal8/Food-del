const foods = [
  {
    name: "Salad",
    image: "/images/salad.jpg",
  },
  {
    name: "Rolls",
    image: "/images/rolls.webp",
  },
  {
    name: "Desserts",
    image: "/images/desserts.jpg",
  },
  {
    name: "Sandwich",
    image: "/images/sandwich.jpg",
  },
  {
    name: "Cake",
    image: "/images/cake.jpg",
  },
  {
    name: "Pure Veg",
    image: "/images/pure-veg.jpg",
  },
  {
    name: "Pasta",
    image: "/images/pasta.jpg",
  },
  {
    name: "Noodles",
    image: "/images/noodles.jpg",
  },
];

const ExploreMenu = () => {
  return (
    <section className="mt-14">
      <h2 className="text-4xl font-bold">
        Explore our menu
      </h2>

      <p className="mt-5 text-gray-500 max-w-3xl leading-8">
        Choose from a diverse menu featuring a delectable
        array of dishes. Our mission is to satisfy your
        cravings and elevate your dining experience.
      </p>

      <div className="flex justify-between mt-12 overflow-x-auto gap-8">
        {foods.map((food) => (
          <div
            key={food.name}
            className="flex flex-col items-center cursor-pointer min-w-fit"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            <p className="mt-4 text-gray-700">
              {food.name}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-12" />

      <h2 className="text-xl font-semibold mt-10">
        Top dishes near you
      </h2>
    </section>
  );
};

export default ExploreMenu;