import img1 from '@/public/sec1img1.png';
import img2 from '@/public/sec1img2.png';
import img3 from '@/public/sec1img3.png';
import img4 from '@/public/sec1img4.png';
import icon from '@/public/icon.png';
import Image from "next/image";
import Link from 'next/link';

const images = [
  { id: 1, src: img1, alt: 'Healthcare' },
  { id: 2, src: img2, alt: 'Education' },
  { id: 3, src: img3, alt: 'Finance' },
  { id: 4, src: img4, alt: 'Business' }
];

const getOffsetClass = (id) => {
  switch (id) {
    case 1:
      return 'sm:-translate-y-1';
    case 2:
      return 'sm:translate-y-1';
    case 3:
      return 'sm:-translate-y-1';
    case 4:
      return 'sm:translate-y-1';
    default:
      return '';
  }
};

export default function Mission() {
  return (
    <div className="relative w-full py-5 md:py-20 ">

      {/* Decorative Gradients */}
      <div className='absolute -bottom-10 -left-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-gradient-to-t from-[#A854E9] to-[#4F91FC90] rounded-full blur-[120px]'></div>
      <div className='absolute top-0 -right-10 w-[180px] h-[200px] md:w-[220px] md:h-[260px] bg-gradient-to-t from-[#A854E9] to-[#4F91FC90] rounded-full blur-[130px]'></div>

      {/* Content Wrapper */}
      <div className="w-full max-w-[1140px] mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-5">

        {/* Left Side - Images */}
        <div className=" relative grid grid-cols-1 sm:grid-cols-2 gap-2.5 place-items-center">
          {images.map((image) => (
            <div  key={image.id} className={`group relative z-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[276px] lg:h-[276px] hover:shadow-[1px_1px_30px_1px] hover:shadow-[#A854E950] transform ${getOffsetClass(image.id)} transition-all`} >

              <Image src={image.src} alt={image.alt} fill className='object-cover object-top-right rounded-lg group-hover:scale-105 transition-transform duration-300 cursor-pointer' />

            </div>
          ))}

          {/* Center Icon */}
          <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] bg-white rounded-full flex items-center justify-center shadow-md'>
            <Image src={icon} width={55} height={55} alt='icon' />
          </div>

          {/* Glow effect center */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[200px] md:h-[200px] bg-gradient-to-t from-[#A854E9] to-[#4F91FC] rounded-full blur-[90px]'></div>
        </div>

        {/* Right Side - Text */}
        <div className='xl:relative xl:left-10 max-w-[520px] text-center xl:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug'>
            Our
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#A854E9] to-[#4F91FC]'> Mission</span>
          </h1>

          <p className='mt-4 text-sm sm:text-base font-normal leading-relaxed'>
            In our commitment to excellence, we create value across these diverse sectors. 
            In Healthcare, we seek to improve patient outcomes and make healthcare more accessible. 
            In Education, we aim to revolutionize learning experiences, empowering individuals with knowledge. 
            In Finance, we strive to enhance financial services, making them more inclusive and efficient. 
            In Marketing, we harness the power of data and AI to drive innovation and growth.
          </p>

          <Link href="/readMore"
            className='inline-flex w-[120px] sm:w-[167px] h-[40px] sm:h-[56px] rounded-full bg-gradient-to-r from-[#A854E9] to-[#4F91FC] items-center justify-center my-8 transition-all duration-300 hover:shadow-[1px_1px_30px_1px] hover:shadow-[#A854E990]'>
            <span className='text-base font-semibold text-white transition transform duration-300 group-hover:scale-125'>
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}












