import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/inc/header";
import Footer from "../components/inc/footer";
import { useRouter } from "next/navigation";
// import banner from "../components/images/banner.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delifax",
  description: "Get a faster delivery",
};

export default function RootLayout({ children }) {
  // const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main className={` bg-[#FFFFFF] `}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
