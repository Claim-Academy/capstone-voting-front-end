export default function Footer() {
  return (
    <footer className="mt-4 bg-slate-100 py-4">
      <p className="text-center">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://claimacademystl.com/">Claim</a>
      </p>
    </footer>
  );
}
