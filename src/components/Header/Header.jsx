import LWSLogo from "../../assets/lws-logo-en.svg";

export default function Header() {
  return (
    <nav className="py-6 px-4 md:py-8 fixed top-0 w-full z-50 bg-gray-900">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={LWSLogo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
