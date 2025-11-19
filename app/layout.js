'use client';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import BreadCrumbs from "@/components/BreadCrumbs";


export default function RootLayout({ children }) {
  const pathname = usePathname()
 
  return (
    <html lang="en">
      <body className=" overflow-x-hidden">

        <Navbar />
        <main className="">
          <AnimatePresence>
            <motion.div
              key={pathname}
              initial={ { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              //exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}>
              <BreadCrumbs />
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />

      </body>
    </html>
  );
}
