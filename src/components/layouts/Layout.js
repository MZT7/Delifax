import Header from "../inc/Header";
import Footer from "../inc/Footer";
// import Sidebar from "../inc/Sidebar";

function Layout(props) {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      {/* <Sidebar /> */}
      <main className="container min-h-screen px-4 mx-auto overflow-hidden">
        {/* <Sidebar /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
