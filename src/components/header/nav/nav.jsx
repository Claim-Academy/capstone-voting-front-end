import LinkHome from "@components/link-home";
import LinkUser from "./link-user";
import SignInOut from "./sign-in-out";

export default function Nav() {
  return (
    <nav className=" bg-slate-100 py-1 px-4 text-slate-900">
      <ul className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <LinkHome />
          <LinkUser />
        </div>
        <SignInOut />
      </ul>
    </nav>
  );
}
