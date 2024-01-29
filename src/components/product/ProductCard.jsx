const ProductCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
      <a href="product-des">
        <img
          className="h-72 md:h-48 w-full object-cover object-center rounded-lg"
          src={`http://localhost:3000/images/items/${props.cover}`}
          alt="Product Image"
        />

        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900">
            {props.name}
          </h2>
          <p className="mb-2 text-base text-gray-700">
            {props.description
              ? props.description.length > 29
                ? `${props.description.substring(0, 29)}...`
                : props.description
              : "No description available"}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-md font-semibold">Start at</p>
            <p className="text-base  font-medium text-gray-500">
              LKR {props.price}
            </p>
            <p className="ml-auto text-base font-medium text-[#0052D4]">
              Bid Now!
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
