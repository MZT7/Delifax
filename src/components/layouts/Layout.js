import Header from "../inc/Header";
import Footer from "../inc/Footer";
// import Sidebar from "../inc/Sidebar";

function Layout(props) {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      {/* <Sidebar /> */}
      <main className="container min-h-screen px-4 pt-40 mx-auto overflow-hidden sm:pt-0">
        {/* <Sidebar /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
