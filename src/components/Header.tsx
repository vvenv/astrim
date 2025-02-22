import AccountLogin from "./AccountLogin";
import HeaderLogo from "./HeaderLogo";
import MenuDrawer from "./MenuDrawer";
import Search from "./Search";
import i18n from "@/i18n/i18n.mjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 grid grid-cols-[160px_1fr_160px] items-center border-b border-default/8 bg-default px-6 py-2">
      <MenuDrawer />
      <HeaderLogo />
      <div className="flex items-center justify-end gap-2">
        <Search />
        <AccountLogin className="hidden md:block" iconOnly />
        <a
          className="p-0.5 text-default"
          href={`/${i18n.language}/cart`}
          aria-label="View cart"
        >
          <i className="i-astrim:cart-empty block size-10 cursor-pointer transition-transform hover:scale-110"></i>
        </a>
      </div>
    </header>
  );
}
