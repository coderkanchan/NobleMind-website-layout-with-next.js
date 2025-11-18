

import Link from "next/link";
import Image from "next/image";
import image from "@/public/sec5Img.png";

export default function Section5() {
  return (
    <div className="w-full py-14 sm:py-20 px-4 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto relative rounded-2xl overflow-hidden">

        {/* Background Image */}
        <div className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px]">
          <Image src={image} alt="Background Image" fill className="object-cover object-center rounded-2xl" priority />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#A854E980] to-[#4F91FC80] rounded-2xl"></div>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[800px] leading-snug">
            So, what you’ve been waiting for?
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white max-w-[700px] mx-auto leading-relaxed">
            Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor euismod rhoncus non elit molestie sed. Orci quam at varius eget.
          </p>

          <Link href="/getStarted"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center w-[110px] sm:w-[150px] md:w-[180px] h-[40px] sm:h-[50px] md:h-[56px] bg-white rounded-full group transition-all duration-300 hover:scale-105">

            <span className="bg-gradient-to-t from-[#A854E9] to-[#4F91FC] text-transparent bg-clip-text font-semibold text-sm sm:text-base md:text-lg group-hover:scale-110 transition-transform duration-300">
              Get Started
            </span>

          </Link>
        </div>
      </div>
    </div>
  );
}
