const ProductCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center rounded-lg"
        src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Start at
          </p>
          <p className="text-base  font-medium text-gray-500">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-[#0052D4]">Bid Now!</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
