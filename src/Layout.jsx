import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "sonner";
import { CartButton } from "./components/Cart/CartButton";

function Layout() {
  return (
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
  );
}

export default Layout;
