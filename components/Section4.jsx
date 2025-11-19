import icon1 from '@/public/sec4Icon.png';
import icon2 from '@/public/sec4Icon2.png';
import icon3 from '@/public/sec4Icon3.png';
import icon4 from '@/public/sec4Icon4.png';
import icon5 from '@/public/sec4Icon5.png';
import icon6 from '@/public/sec4Icon6.png';
import Image from 'next/image';

const logos = [
  { id: 1, src: icon1, name: 'Layers' },
  { id: 2, src: icon2, name: 'Catalog' },
  { id: 3, src: icon3, name: 'Quotient' },
  { id: 4, src: icon4, name: 'Circooles' },
  { id: 5, src: icon5, name: 'Sisyphus' },
  { id: 6, src: icon6, name: 'Catalog' }
]

const getStaggered = (id) => {
  switch (id) {
    case 3:
    case 4:
      return 'lg:translate-x-10 xl:translate-x-20';

    default:
      return '';
  }
}

export default function Section4() {
  return (
    <div className="w-full py-40 bg-[#EFEFEF] relative ">

      <div className='absolute -bottom-10 -left-30 w-[300px] h-[300px] bg-gradient-to-r from-[#A854E990] to-[#4F91FC50] blur-[130px] rounded-full z-0'></div>

      <div className='absolute  top-0 -right-50 w-[500px] h-[220px] bg-gradient-to-r from-[#A854E990] to-[#4F91FC50] blur-[140px] rounded-full z-0'></div>

      <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between xl:flex-row flex-col gap-20">

        <h1 className="w-full xl:max-w-[460px] text-center xl:text-left font-bold lg:text-5xl text-3xl">Join 4,000+ companies <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#A854E9] to-[#4F91FC]">already growing</span></h1>

        <div className=" w-full max-w-[500px] grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-10 justify-items-center">
          {logos.map((logo) => {
            const isStaggeredAndBold = (logo.id === 3 || logo.id === 4);
            const isLastLogo = logo.id === 5;
            const imageHB = isLastLogo ? 35 : 50;
            return (
              <div key={logo.id} className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 ${getStaggered(logo.id)}`}>
                <Image src={logo.src} width={imageHB} height={imageHB} alt="Icon" className="" />
                <span className={`lg:text-2xl text-lg font-semibold ${isStaggeredAndBold ? 'lg:font-bold' : ''}`}>{logo.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

