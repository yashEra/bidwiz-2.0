import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const TeamMemberCard = (props) => {
  return (
    <div className="bg-[white] drop-shadow-md rounded-xl transform hover:scale-103 duration-300 hover:shadow-lg">
      <a href="#">
        <div className="p-2">
        <img
          className="h-[400px] w-full object-cover object-center rounded-t-lg"
          src={props.image}
          alt="Profile Picture"
        />
        </div>

        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900">
            {props.name}
          </h2>
          <p className="mb-2 text-base text-gray-700">{props.des}</p>
          <div className="flex items-center">
            <a className="mr-2 text-xl font-semibold  text-[#0052D4]" href={props.linkedin}>
              <AiFillLinkedin />{" "}
            </a>
            <a
              className="text-xl  font-medium  text-[#0052D4]"
              href={props.fb}
            >
              <AiFillGithub />{" "}
            </a>
            <a
              className="ml-auto text-xl font-medium text-[#0052D4]"
              href={props.github}
            >
              <AiFillFacebook />{" "}
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TeamMemberCard;
