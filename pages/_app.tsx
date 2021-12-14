import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-40 md:px-25 sm:px-10 md:px-32">
        <div className=" bg-ecru dark:bg-black dark:text-white  lg:col-span-3 text-center  lg:px-1   rounded-2xl col-span-12 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className=" bg-ecru  dark:bg-black dark:text-white lg:col-span-9 bg-white col-span-12 rounded-2xl overflow-hidden flex flex-col shadow-custom-light dark:shadow-custom-dark">
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
