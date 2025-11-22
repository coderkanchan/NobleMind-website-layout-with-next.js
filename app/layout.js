//'use client';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import { AnimatePresence, motion } from "framer-motion";
//import { usePathname } from "next/navigation";
import ClientTransitionWrapper from "@/components/ClientTransitionWrapper";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Poppins } from "next/font/google";
import { NavProvider } from "@/context/NavContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {
  //const pathname = usePathname()

  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <NavProvider>
          <Navbar />
          <main className="grow">
            {/* <AnimatePresence>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              //exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}>
              <BreadCrumbs />
              {children}
            </motion.div>
          </AnimatePresence> */}
            <ClientTransitionWrapper>
              <BreadCrumbs />
              {children}
            </ClientTransitionWrapper>
          </main>
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
