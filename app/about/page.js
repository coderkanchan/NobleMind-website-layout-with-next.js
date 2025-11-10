import Link from "next/link"

export default function page() {
  
  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] py-20 mx-auto px-3 ">
        <h1 className="xl:text-[64px] font-bold lg:text-5xl sm:text-4xl text-3xl leading-loose bg-gradient-to-b from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent">About Us</h1>
          <Link href="/about/team" className="text-blue-600 underline hover:text-violet-500">Our team</Link>
        <p className="text-lg lg:text-2xl">This is about us page. you can add your about us page content here.</p>
         <br></br>
      </div>
    </div>
  )
}