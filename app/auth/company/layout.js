import Header from "../../../components/inc/company/header.jsx";
import Footer from "../../../components/inc/company/footer.jsx";

export default function CompanyLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
