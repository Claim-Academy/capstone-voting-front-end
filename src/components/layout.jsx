import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
