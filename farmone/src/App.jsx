import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";

export default function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
