import SignInOut from "./sign-in-out";

export default function Nav() {
  return (
    <nav className="flex justify-around bg-slate-100 py-1 text-slate-900">
      <ul>
        <SignInOut />
      </ul>
    </nav>
  );
}
