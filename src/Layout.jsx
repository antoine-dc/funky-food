import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/Layout.css";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
      <Header />
      <main className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
