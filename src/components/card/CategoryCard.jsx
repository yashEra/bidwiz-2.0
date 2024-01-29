const CategoryCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
      <a href={props.url}>
        <img
          className="h-72 md:h-48 w-full object-cover object-center rounded-lg"
          src={`http://localhost:3000/images/items?${props.cover}`}
          alt="Product Image"
        />

        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900">
            {props.name}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
