import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/inc/header";
import Footer from "../components/inc/footer";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/Ads/toast";
import ReduxProvider from "@/reduxStore/reduxProvider";
// import banner from "../components/images/banner.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delifax",
  description: "Get a faster delivery",
};

export default function RootLayout({ children }) {
  // const router = useRouter();

  return (
    <ReduxProvider>
      <html lang="en">
        <body className={"font-[Montserrat]"} suppressHydrationWarning={true}>
          <Toast>
            <main> {children}</main>
          </Toast>
        </body>
      </html>
    </ReduxProvider>
  );
}
