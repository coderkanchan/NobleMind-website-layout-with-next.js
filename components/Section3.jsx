
import Image from "next/image";
import img from "@/public/sec3img.png";
import icon from "@/public/checkIcon.png";

const datas = [
  { id: 1, title: "Customer-Centric", desc: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value." },
  { id: 2, title: "Ethical Leadership", desc: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent." },
  { id: 3, title: "Commitment to Vision 2030", desc: "Align with and champion Saudi Arabia's technological and societal aspirations." },
  { id: 4, title: "Social Responsibility", desc: "Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable practices in both business and societal arenas." },
  { id: 5, title: "Global Resonance", desc: "Share insights and innovations that have a positive impact across borders and sectors." },
  { id: 6, title: "Innovation", desc: "Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings." },
  { id: 7, title: "Collaboration", desc: "Forge strategic partnerships across industries and institutions, emphasizing both global and local advancements." },
  { id: 8, title: "Workplace Harmony", desc: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family." },
];

export default function Section3() {
  return (
    <div className="w-full py-14 sm:py-20 bg-[#f4f0f090] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute -bottom-[80px] -left-[60px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-gradient-to-r from-[#A854E990] to-[#4F91FC50] blur-[130px] rounded-full z-0"></div>
      <div className="absolute top-[20px] -right-[80px] w-[400px] sm:w-[500px] h-[180px] sm:h-[220px] bg-gradient-to-r from-[rgba(168,84,233,0.56)] to-[#4F91FC50] blur-[140px] rounded-full z-0"></div>

      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between text-center xl:text-left gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]">
              Choose
            </span>{" "}
            Us
          </h1>

          <p className="max-w-[600px] text-sm sm:text-base opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi euismod, porttitor quam sit amet, efficitur lectus. Mauris eget pulvinar ante. Fusce posuere, mi in pretium consequat, sem augue eleifend lorem, ut blandit libero neque vitae ex.
          </p>
        </div>

        {/*  Image Section  */}
        <div className="relative w-full my-10 sm:my-12 md:my-16 h-[250px] sm:h-[350px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt="Team working together"
            fill
            className="object-cover object-[50%_20%] rounded-2xl"
            priority
          />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5 sm:gap-6">
          {datas.map((data) => (
            <div
              key={data.id}
              className="border border-[#1515153d] bg-[#fbf8f8] p-4 sm:p-5 rounded-2xl hover:shadow-[0_4px_27px_0_#0000002D] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-[26px] h-[26px] bg-[#c9a8e390] rounded-full flex items-center justify-center shrink-0">
                  <Image src={icon} width={12} height={7} alt="check icon" />
                </span>
                <h4 className="font-bold text-base sm:text-lg">{data.title}</h4>
              </div>
              <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
