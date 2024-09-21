import "@/assets/styles/globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import AuthProvider from "@/Components/AuthProvider";

export const metadata = {
  title: "property booking",
  keywords: "rental,property,real estate",
  description:
    "Find the perfect property for your next rental. Book with us today!",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
