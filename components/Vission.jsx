// import checkIcon from '@/public/checkIcon.png';
// import icon from '@/public/icon.png'
// import img from '@/public/vissionImg.jpg';
// import Image from 'next/image';

// const datas = [
//   { id: 1, icon: checkIcon, desc: "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence." },
//   { id: 2, icon: checkIcon, desc: "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience." },
//   { id: 3, icon: checkIcon, desc: "Share insights and innovations that have a positive impact across borders and sectors." }
// ]


// export default function Visson() {
//   return (
//     <div className="w-full  md:py-20">

//       <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between gap-12 xl:flex-row flex-col">

//         <div className="max-w-[450px]">

//           <div className="">
//             <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold leading-snug'>Our
//               <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]'> Vission</span>
//             </h1>
//             <p className="leading-snug lg:text-base text-sm font-normal py-4">The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.</p>
//           </div>

//           <div className="max-w-[450px] w-full ">
//             {datas.map((data) => (
//               <div key={data.id} className='w-full flex md:flex-row flex-col md:text-left text-center items-center md:items-start md:p-3 p-2 my-4 md:gap-4 gap-2 border border-[#A854E9] rounded-2xl group hover:bg-[#bf8de650] hover:shadow-[0px_0px_12px_2px_] hover:shadow-[#755e8640] transition-all duration-300'>
//                 <div className=' w-[35px] h-[32px]  bg-[#A854E930] rounded-full flex items-center justify-center group-hover:bg-transparent'>
//                   <Image src={data.icon} alt='icon' className='transition-transform duration-300 group-hover:scale-150' />
//                 </div>
//                 <span className='w-full max-w-[330x] lg:text-base text-sm transition-all duration-200  group-hover:text-gray-700  group-hover:scale-102 '>{data.desc}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='relative w-full sm:w-[80%] sm:h-[350px] md:w-[70%] md:h-[450px] lg:w-[600px] lg:h-[520px] h-[250px]  overflow-hidden group m-3 rounded-2xl'>

//           <Image src={img} alt='image' fill className='relative object-cover object-center rounded-2xl  group-hover:scale-103 transition-transform duration-300 group-hover:shadow-[1px_1px_20px_1px] group-hover:shadow-[#705c8070]' />
//           <Image src={icon} width={43} height={43} alt='Icon' className='absolute top-55 left-77' />

//         </div>
//       </div>
//     </div>
//   )
// }

import checkIcon from '@/public/checkIcon.png';
import icon from '@/public/icon.png';
import img from '@/public/vissionImg.jpg';
import Image from 'next/image';

const datas = [
  { id: 1, icon: checkIcon, desc: "The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence." },
  { id: 2, icon: checkIcon, desc: "Technology is seen as a force for good, capable of driving positive change in society and improving the human experience." },
  { id: 3, icon: checkIcon, desc: "Share insights and innovations that have a positive impact across borders and sectors." }
];

export default function Visson() {
  return (
    <div className="w-full md:py-20 py-10">

      <div className="max-w-[1140px] mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-14">

        <div className="w-full xl:w-1/2 max-w-[500px]">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]"> Vission</span>
          </h1>

          <p className="leading-snug text-sm md:text-base font-normal py-4 opacity-80">
            The future of how we live, work, and learn. We see a world where
            technology is not just a tool but a transformative force for good.
          </p>

          <div className="w-full mt-4">
            {datas.map((data) => (
              <div key={data.id} className=" w-full flex md:flex-row flex-col  text-center md:text-left  items-center md:items-start border border-[#A854E9] rounded-2xl p-3 md:p-4 my-4 gap-3 group hover:bg-[#bf8de650] hover:shadow-[0_0_12px_2px_#755e8640] transition-all duration-300 ">

                <div className="w-[38px] h-[38px] bg-[#A854E930] rounded-full flex items-center justify-center group-hover:bg-transparent">
                  <Image src={data.icon} alt="icon" className="duration-300 group-hover:scale-125" />
                </div>

                <span className="text-sm md:text-base transition-all duration-300 group-hover:text-gray-700">
                  {data.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[260px] sm:h-[330px] md:h-[420px] lg:h-[500px] xl:w-[550px] overflow-hidden rounded-2xl group">
          <Image src={img} alt="image" fill className=" object-cover object-center rounded-2xl  transition-transform duration-500  group-hover:scale-105 " />

          <Image src={icon} alt="Icon" className='w-[35px] h-[35px] absolute xl:top-[47%] xl:left-[56%] top-[45%] left-[54%] -translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>
    </div>
  );
}

