import Header from "../inc/Header";
import Footer from "../inc/Footer";
// import { useEffect } from "react";
// import Sidebar from "../inc/Sidebar";

function Layout(props) {
  // useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      {/* <Sidebar /> */}
      <main className="container min-h-screen px-4 mx-auto overflow-hidden pt-28 sm:pt-0">
        {/* <Sidebar /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
