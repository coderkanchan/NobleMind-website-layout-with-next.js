'use client'
import { useEffect } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useNav } from "@/context/NavContext";


const navlinks = [
  { id: 1, href: "/", link: "Home" },
  { id: 2, href: "/about", link: "About Us" },
  { id: 3, href: "/solutions", link: "Solutions" },
  { id: 4, href: "/resources", link: "Resources" }
]

export default function Navbar() {

  const { isOpen, toggleMenu, closeMenu } = useNav();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);



  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-49 lg:hidden"></div>
      )}

      <div className="w-full py-5 fixed top-0 left-0  z-50  bg-white/80  backdrop-blur-lg">

        <div className="max-w-[1140px] mx-auto px-3 related">

          <nav className="flex items-center justify-between">

            <Link href='/'>
              <Image src={logo} alt="logoImage" className="cursor-pointer max-w-[94px] min-h-[56px]" />
            </Link>

            <div className="flex items-center justify-between w-full max-w-0 sm:max-w-[170px] lg:max-w-[600px] xl:max-w-[720px] ">

              <div className="hidden lg:flex items-center gap-10">
                {navlinks.map((link) => (
                  <Link key={link.id} href={link.href} className={` text-base ${pathname === link.href ? "text-black underline decoration-1.5 decoration-[#a84fec] underline-offset-9" : "text-black/70 font-normal hover:text-[#A854E9]"}`}>{link.link}</Link>
                ))}
              </div>

              <div className=" max-lg:w-full flex items-center justify-between gap-10">

                <Link href="/contact" className="relative z-30 group sm:flex hidden lg:w-[169px] lg:h-[56px] w-[120px] h-[40px] text-base lg:text-lg font-bold text-white rounded-full  bg-gradient-to-r from-[#A854E9] to-[#4F91FC] items-center justify-center hover:shadow-lg hover:shadow-[#a37ac2] transition-all duration-300 cursor-pointer">
                  <span className="transition-transform duration-300 group-hover:scale-110 ">Contact Us</span>
                </Link>

                <div className="lg:hidden flex relative z-100">

                  <button onClick={toggleMenu} className="relative flex items-center justify-end">
                    <CgMenuRight className={`absolute w-10 h-10 cursor-pointer transition-all duration-700
                     ${isOpen ? "opacity-0 scale-0 rotate-90 " : "opacity-100 scale-100 rotate-0 text-[#8933cb]"}`} />

                    <IoClose className={`absolute w-10 h-10 cursor-pointer transition-all duration-700 
                    ${isOpen ? "opacity-100 scale-100 rotate-0 text-white" : "opacity-0 scale-0 rotate-90"}`} />
                  </button>

                </div>
              </div>
            </div>
          </nav>

          <div className={`lg:hidden flex flex-col items-center justify-center absolute z-20 bg-[#a84fec] space-y-12 py-20 left-0 right-0 top-0 h-[400px] md:h-[500px] transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-[400px] opacity-0"}`}>

            {navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="opacity-70 text-base font-normal text-white hover:opacity-100 hover:scale-110"
                onClick={closeMenu}>
                {link.link}
              </Link>
            ))}

            <Link href="/contact"
              className="flex sm:hidden lg:w-[169px] lg:h-[56px] w-[120px] h-[40px] text-base lg:text-lg font-bold text-white rounded-full bg-[#8943be] items-center justify-center border-2 border-white hover:bg-white hover:text-[#a84fec] cursor-pointer"
              onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}





