
import Image from "next/image"
import footerLogo from '@/public/footerLogo.png'
import Link from "next/link"
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";

const datas = [
  {
    id: 1,
    title: "Main Menu",
    links: [
      { id: 1, name: "Home", href: '/' },
      { id: 2, name: "About Us", href: '/about' },
      { id: 3, name: "How it Works", href: '/howitworks' },
      { id: 4, name: "Why Choose Us", href: '/whychooseus' },
      { id: 5, name: "Steps", href: '/steps' }
    ]
  },
  {
    id: 2,
    title: "Legal",
    links: [
      { id: 1, name: "Terms", href: '/terms' },
      { id: 2, name: "Privacy", href: '/privacy' }
    ]
  },
  {
    id: 3,
    title: "Contact Info",
    contact: {
      phone: "+0000000000",
      email: "info@noblemindit.gmail.com"
    }
  },
]

const icons = [
  { id: 1, icon: <RiInstagramFill />, href: "https://www.instagram.com/" },
  { id: 2, icon: <FaFacebookF />, href: "https://www.facebook.com/" },
  { id: 3, icon: <FaLinkedinIn />, href: "https://www.linkedin.com/" }
]

export default function Footer() {
  return (
    <footer className="w-full bg-black pt-16 text-white">
      <div className="
        max-w-[1140px] mx-auto px-4 
        grid 
        xl:grid-cols-[385px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] 
        md:grid-cols-2 
        grid-cols-1 
        gap-10
      ">

        {/* --- Logo + Description --- */}
        <div className="xl:w-[385px] w-full">
          <Image src={footerLogo} alt="Logo" className="w-[180px] sm:w-[200px]" />
          <p className="py-6 text-sm sm:text-base opacity-80 leading-relaxed">
            Join us on the journey to embrace the future. Experience the transformational impact of AI and automation with Algominds.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {icons.map((icon) => (
              <a
                key={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF29] rounded-full 
                  hover:bg-[#491b6c] transition-all duration-300"
              >
                <span className="text-xl text-[#A854E9] transition-all duration-300">
                  {icon.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* --- Footer Links --- */}
        {datas.map((data) => (
          <div key={data.id} className="space-y-3 min-w-0">
            <h3 className="font-bold text-lg">{data.title}</h3>

            {/* Links */}
            {data.links && (
              <ul className="space-y-2">
                {data.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base hover:text-[#A854E990] opacity-80 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Contact */}
            {data.contact && (
              <ul className="space-y-3 text-sm sm:text-base break-words">
                <li className="flex items-center gap-3">
                  <IoCallSharp className="text-[#A854E9] text-lg shrink-0" />
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="hover:text-[#A854E990] transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IoMail className="text-[#A854E9] text-lg shrink-0" />
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="hover:text-[#A854E990] transition-colors break-all"
                  >
                    {data.contact.email}
                  </a>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* --- Bottom Copyright --- */}
      <div className="mt-12 border-t border-[#812fc1] py-6 text-center text-sm opacity-70">
        © Noble Mind IT 2023. All Rights Reserved.
      </div>
    </footer>
  )
}







