import img from '@/public/heroImage.png';
import Image from 'next/image';
import Link from 'next/link';



export default function Hero() {
  return (
    <div className="w-full sm:py-10 md:py-30 py-6 text-center">

      <div className="max-w-[1140px]  mx-auto px-3 relative">

        <div className="w-full max-w-[950px] text-center mx-auto">

          <h1 className=" xl:text-[64px] font-bold lg:text-5xl sm:text-4xl text-3xl ">
            Elevate Your Solutions with
            <br />
            <span className="bg-gradient-to-r from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent">
              Noble Mind IT
            </span>
          </h1>

          <p className=" max-w-[850px] mx-auto font-normal text-base py-4">At Noble Mind IT, we're dedicated to taking your IT solutions to new heights. In today's ever-evolving technological landscape, having a trusted partner to elevate your IT infrastructure is paramount.</p>
        </div>

        <div className='relative z-10 p-[5px] bg-gradient-to-b from-[#A854E950] to-[#4F91FC50] rounded-2xl   my-10 flex items-center justify-center'>

          <div className='w-full h-[400px] md:h-[480px] lg:h-[520px] relative overflow-hidden  '>
            <Image src={img} fill alt="Hero image" priority className='rounded-xl object-cover object-center' />
          </div>

          <div className='w-full xl:max-w-[997px] lg:max-w-[850px] md:max-w-[650px] sm:max-w-[500px] max-w-[400px] absolute bottom-13 rounded-xl flex items-center sm:justify-evenly lg:gap-[25px] sm:gap-3 sm:backdrop-blur-xl py-4 px-8'>

            <div className='flex items-center justify-between gap-1 md:gap-3 md:flex-row flex-col  w-full max-w-[200px] '>
              <span className='font-bold xl:text-6xl lg:text-5xl text-3xl text-white'>8+</span>
              <span className='max-w-[100px]  md:text-lg  text-base font-normal text-white md:text-left'>Years of Experience</span>
            </div>

            <div className='hidden sm:flex w-full max-w-[1px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent'></div>

            <div className='flex items-center justify-between md:gap-3 gap-1 md:flex-row flex-col w-full max-w-[200px] '>
              <span className='font-bold xl:text-6xl lg:text-5xl text-3xl text-white'>50+</span>
              <span className='max-w-[100px]  md:text-lg sm:text-base text-sm font-normal text-white md:text-left'>Successful Projects</span>
            </div>

            <div className='hidden sm:flex w-full max-w-[1px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent'></div>

            <div className='flex items-center justify-between md:gap-3 gap-1 md:flex-row flex-col w-full max-w-[200px] '>
              <span className='font-bold xl:text-6xl lg:text-5xl text-3xl text-white'>30+</span>
              <span className='max-w-[100px] md:text-lg sm:text-base text-sm font-normal text-white md:text-left'>Satisfied Customers</span>
            </div>

          </div>

        </div>

        <div className="absolute sm:flex hidden xl:-left-8 left-0 xl:top-50 lg:top-42 md:top-40 sm:top-45   max:sm: rounded-full bg-gradient-to-b from-[#A854E9] to-[#4F91FC] p-[20px]">
          <div className='w-[55px] h-[55px] bg-white rounded-full'></div>
        </div>

        <div className="absolute sm:flex hidden -bottom-10 xl:-right-8 right-0 rounded-full bg-gradient-to-b from-[#A854E9] to-[#4F91FC] p-[20px]">
          <div className='w-[55px] h-[55px] bg-white rounded-full'></div>
        </div>

      </div>

      <Link href="/getStarted" className="flex items-center justify-center mx-auto group  rounded-full md:w-[175px] md:h-[56px] w-[120px] h-[40px] bg-gradient-to-r from-[#A854E9] to-[#4F91FC] hover:shadow-[2px_2px_25px_2px] hover:shadow-[#ac5de990] transition-all duration-300 md:text-lg text-base font-semibold text-white">
        <span className=" transition-transform duration-300 group-hover:scale-110">Get Started</span>
      </Link>

    </div>
  )
}









