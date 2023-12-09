// "use client";
import "./globals.css";
// import { Inter } from "next/font/google";

import Header from "../components/inc/header";
import Footer from "../components/inc/footer";
import { useRouter } from "next/navigation";
import StyledComponentsRegistry from "../lib/AntdRegistry";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/Ads/toast";
import ReduxProvider from "@/reduxStore/reduxProvider";
// import dynamic from "next/dynamic";
// const ReduxProvider = dynamic(() => import("@/reduxStore/reduxProvider"), {
//   ssr: false,
// });

import ApiLoader from "@/components/ApiLoader/apiLoader";
// import "@/globals.css";
// import { store } from "@/reduxStore/store";
// import banner from "../components/images/banner.png";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delifax",
  description: "Get a faster delivery",
};

export default function RootLayout({ children }) {
  // const router = useRouter();

  return (
    <html lang="en">
      <body className={"font-[Montserrat]"}>
        <ReduxProvider>
          <Toast>
            <StyledComponentsRegistry>
              <ApiLoader>{children}</ApiLoader>
              {/* <main> </main> */}
            </StyledComponentsRegistry>
          </Toast>
        </ReduxProvider>
      </body>
    </html>
  );
}
