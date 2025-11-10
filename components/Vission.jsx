import icon from '@/public/checkIcon.png';
import img from '@/public/vissionImg.jpg';
import Image from 'next/image';

const datas = [
  { id: 1, icon: icon, desc: "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence." },
  { id: 2, icon: icon, desc: "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience." },
  { id: 3, icon: icon, desc: "Share insights and innovations that have a positive impact across borders and sectors." }
]


export default function Visson() {
  return (
    <div className="w-full  md:py-20">

      <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between gap-12 xl:flex-row flex-col">

        <div className="max-w-[450px]">

          <div className="">
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold leading-snug'>Our
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]'> Vission</span>
            </h1>
            <p className="leading-snug lg:text-base text-sm font-normal py-4">The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.</p>
          </div>

          <div className="max-w-[450px] w-full ">
            {datas.map((data) => (
              <div key={data.id} className='w-full flex md:flex-row flex-col md:text-left text-center items-center md:items-start md:p-3 p-2 my-4 md:gap-4 gap-2 border border-[#A854E9] rounded-2xl group hover:bg-[#bf8de650] hover:shadow-[0px_0px_12px_2px_] hover:shadow-[#755e8640] transition-all duration-300'>
                <div className=' w-[35px] h-[32px]  bg-[#A854E930] rounded-full flex items-center justify-center group-hover:bg-transparent'>
                  <Image src={icon} alt='icon'  className='transition-transform duration-300 group-hover:scale-150' />
                </div>
                <span className='w-full max-w-[330x] lg:text-base text-sm transition-all duration-200  group-hover:text-gray-700  group-hover:scale-102 '>{data.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='relative w-full
         sm:w-[80%] sm:h-[350px] md:w-[70%] md:h-[450px] lg:w-[600px] lg:h-[520px] h-[250px] 
         overflow-hidden group m-3 rounded-2xl'
         >
         <Image src={img}  alt='image' fill 
         className='object-cover object-center rounded-2xl 
         group-hover:scale-103 transition-transform duration-300 group-hover:shadow-[1px_1px_20px_1px] group-hover:shadow-[#705c8070]'/>
        </div>
      </div>
    </div>
  )
}

