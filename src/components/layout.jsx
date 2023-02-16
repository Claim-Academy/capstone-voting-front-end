import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
