
import { FaHospitalAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { SiBookstack, SiCoinmarketcap } from "react-icons/si";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";

const cards = [
  {
    id: 1,
    icon: <FaHospitalAlt />,
    title: "Healthcare",
    desc: "We are on a mission to revolutionize the field of healthcare through cutting-edge innovation.",
  },
  {
    id: 2,
    icon: <PiStudentFill />,
    title: "Education",
    desc: "Education is rooted in the idea that learning should be a lifelong journey.",
  },
  {
    id: 3,
    icon: <SiBookstack />,
    title: "Finance",
    desc: "Recognizing that knowledge is the cornerstone of financial empowerment.",
  },
  {
    id: 4,
    icon: <SiCoinmarketcap />,
    title: "Marketing",
    desc: "Where marketing campaigns are driven by data insights, and creativity knows no bounds.",
  },
  {
    id: 5,
    icon: <BsFillCameraReelsFill />,
    title: "Entertainment",
    desc: "We believe that technology has the power to unlock creativity and new worlds.",
  },
  {
    id: 6,
    icon: <RiPlantFill />,
    title: "Agriculture",
    desc: "We are passionate about regenerative farming practices and sustainable agriculture.",
  },
];

export default function Section2() {
  return (
    <div className="w-full py-16 md:py-20 bg-[#EFEFEF] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -bottom-10 -left-10 w-[250px] md:w-[350px] h-[250px] bg-gradient-to-r from-[#A854E990] to-[#4F91FC50] blur-[120px] rounded-full z-0"></div>
      <div className="absolute top-10 -right-10 w-[300px] md:w-[500px] h-[200px] bg-gradient-to-r from-[#A854E990] to-[#4F91FC50] blur-[140px] rounded-full z-0"></div>

      {/* Heading */}
      <h1 className="mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-snug px-3">
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]">
          Services
        </span>
      </h1>

      {/* Cards */}
      <div className="max-w-[1140px] mx-auto px-4 md:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#EFEFEF] border border-[#0000003D] md:px-6  p-3 py-4 rounded-2xl 
              hover:shadow-[1px_1px_25px_1px_#0000001F] hover:border-transparent 
              transition-all duration-500 group">
              {/* Icon */}
              <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full  bg-[#A854E950] flex items-center justify-center group-hover:bg-gradient-to-br from-[#A854E9] to-[#4F91FC] transition-all duration-500 mx-auto sm:mx-0">
                <span className="text-2xl md:text-3xl text-[#A854E9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </span>
              </div>

              {/* Text */}
              <div className="mt-4 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
