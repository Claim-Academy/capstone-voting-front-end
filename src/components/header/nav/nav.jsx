import LinkHome from "@components/link-home";
import SignInOut from "./sign-in-out";

export default function Nav() {
  return (
    <nav className=" bg-slate-100 py-1 px-4 text-slate-900">
      <ul className="flex items-center justify-between">
        <li>
          <LinkHome />
        </li>
        <SignInOut />
      </ul>
    </nav>
  );
}
