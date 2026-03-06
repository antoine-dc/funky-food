import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "sonner";
import { CartButton } from "./components/Cart/CartButton";
import { useState } from "react";
import { MainProvider } from "./contexts/MainContext";

// import data from "./data/menu.json";

function Layout() {
  // const [menu, setMenu] = useState(data);
  return (
    <MainProvider>
      <div className="min-h-screen">
        <Header />
        <main className="bg-white px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        <Footer />
        <Toaster position="top-center" />
        <CartButton />
      </div>
    </MainProvider>
  );
}

export default Layout;
