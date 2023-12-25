const ProductCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center rounded-lg"
        src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Product Image"
      />

      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">
          Product Name
        </h2>
        <p className="mb-2 text-base text-gray-700">
          Product description goes here.
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">
            $20.00
          </p>
          <p className="text-base  font-medium text-gray-500 line-through">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
