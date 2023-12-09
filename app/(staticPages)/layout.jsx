"use client";
import Header from "../../components/inc/company/header.jsx";
import Footer from "../../components/inc/company/footer.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function GuestLayout({ children }) {
  const router = useRouter();
  const userData = useSelector((state) => state?.auth?.user);
  //   useEffect(() => {
  //     if (userData) {
  //       router.push("/auth/company/home");
  //       return;
  //     }
  //   }, [userData, router]);
  // if (userData) {
  //   return null;
  // }
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
  // return (
  //   <section>
  //     <Header />
  //     {children}
  //     <Footer />
  //   </section>
  // );
}
