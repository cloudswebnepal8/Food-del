const Cart = () => {
  return (
    <div className="w-full px-6 py-10">

      {/* TABLE HEADER */}
      <div className="grid grid-cols-6 text-gray-500 font-medium border-b pb-4">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* EMPTY CART MESSAGE (optional) */}
      <div className="text-center text-gray-400 mt-10">
        Your cart is empty
      </div>

      {/* CART TOTAL SECTION */}
      <div className="flex flex-col lg:flex-row justify-between mt-20 gap-10">

        {/* LEFT - TOTAL */}
        <div className="w-full max-w-md">

          <h2 className="text-xl font-bold mb-6">Cart Total</h2>

          <div className="flex justify-between border-b py-2">
            <p>Subtotal</p>
            <p>$0</p>
          </div>

          <div className="flex justify-between border-b py-2">
            <p>Delivery Fee</p>
            <p>$0</p>
          </div>

          <div className="flex justify-between py-2 font-bold">
            <p>Total</p>
            <p>$0</p>
          </div>

          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded">
            PROCEED TO CHECKOUT
          </button>

        </div>

        {/* RIGHT - PROMO CODE */}
        <div className="w-full max-w-xl">

          <p className="mb-2 text-gray-600">
            If you have a promo code, Enter it here
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="promo code"
              className="flex-1 border px-4 py-3 bg-gray-100 rounded-l"
            />

            <button className="bg-black text-white px-8 rounded-r">
              Submit
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;