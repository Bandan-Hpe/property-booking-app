import "@/assets/styles/globals.css";

export const metadata = {
  title: "property booking",
  keywords: "rental,property,real estate",
  description:
    "Find the perfect property for your next rental. Book with us today!",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
