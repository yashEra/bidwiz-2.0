import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineGlobal } from "react-icons/ai";

const CategoryCard = (props) => {
  return (
    <div className="bg-[#181212] drop-shadow-md rounded-xl transform hover:scale-105 duration-300 hover:shadow-lg">
      <a href={props.portfolio} target="_blank" rel="noopener noreferrer">
        <div className="p-2">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30"
          src={props.image}
          alt="Profile Picture"
        />
        </div>

        <div className="blockitems-center p-4">
          <h2 className="mb-2 text-lg font-medium text-white">
            {props.name}
          </h2>
          <p className="mb-2 text-base text-gray-100">{props.des}</p>
          {/* <div className="flex items-center">
            <a className="mr-2 text-xl font-semibold  text-[#0052D4]" href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />{" "}
            </a>
            <a
              className="text-xl mr-2  font-medium  text-[#0052D4]"
              href={props.github}
              target="_blank" rel="noopener noreferrer"
            >
              <AiFillGithub />{" "}
            </a>
            <a
              className="text-xl  font-medium  text-[#0052D4]"
              href={props.fb}
              target="_blank" rel="noopener noreferrer"
            >
              <AiFillFacebook />{" "}
            </a>
            <a
              className="ml-auto text-xl font-medium text-[#0052D4]"
              href={props.portfolio}
              target="_blank" rel="noopener noreferrer"
            >
              <AiOutlineGlobal />{" "}
            </a>
          </div> */}
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
