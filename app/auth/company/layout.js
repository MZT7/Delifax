"use client";
import Header from "../../../components/inc/company/header.jsx";
import Footer from "../../../components/inc/company/footer.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CompanyLayout({ children }) {
  const router = useRouter();

  const userData = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    if (!userData) {
      router.push("/guest/login");
    }
  }, [userData, router]);

  // return userData ? (
  //   <section>
  //     <Header />
  //     {children}
  //     <Footer />
  //   </section>
  // ) : (
  //   router.push("/guest/login")
  // );

  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
