
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientTransitionWrapper from "@/components/ClientTransitionWrapper";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Poppins } from "next/font/google";
import { NavProvider } from "@/context/NavContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <NavProvider>
          <Navbar />
          <main className="grow">
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
