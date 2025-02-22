import { useEffect } from "react";
import LoginEntry from "./LoginEntry";
import CollectionMenu from "./CollectionMenu";
import SocialMedia from "./SocialMedia";

export default function MenuDrawer() {
  useEffect(() => {
    const clickOutside = (event: any) => {
      const el = document.querySelector("#menu-drawer-content");
      if (!el?.contains(event.target)) {
        document.querySelector("#menu-drawer")?.removeAttribute("open");
      }
    };
    document.documentElement.addEventListener("click", clickOutside);
    return () => {
      document.documentElement.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <details className="group" id="menu-drawer">
      <summary className="flex p-3 text-default" aria-label="Toggle menu">
        <i className="i-astrim:hamburger block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      </summary>
      <section data-testid="menu-drawer-content">
        <div className="fixed inset-0 bg-black/50 opacity-0 transition-opacity group-open:opacity-100"></div>
        <div className="fixed left-0 top-0 h-full w-full flex flex-col bg-default transition-transform md:w-100 -translate-x-full group-open:translate-x-0">
          <button className="m-8" type="button" aria-label="Close menu">
            <i className="i-astrim:close block size-5 cursor-pointer transition-transform hover:scale-110"></i>
          </button>
          <div
            className="min-h-0 flex flex-1 flex-col"
            id="menu-drawer-content"
          >
            <nav className="min-h-0 flex-1 overflow-y-auto">
              <ul>
                <li>
                  <CollectionMenu
                    title="Bags"
                    links={[
                      { link: "/collections/bags", text: "Shop all" },
                      { link: "/collections/tote-bags", text: "Tote bags" },
                      {
                        link: "/collections/shoulder-bags",
                        text: "Shoulder bags",
                      },
                      {
                        link: "/collections/crossbody-bags",
                        text: "Crossbody bags",
                      },
                      {
                        link: "/collections/top-handle-bags",
                        text: "Top handle bags",
                      },
                      { link: "/collections/mini-bags", text: "Mini bags" },
                    ]}
                  />
                </li>
                <li>
                  <CollectionMenu
                    title="Shoes"
                    links={[
                      { link: "/collections/shoes", text: "Shop all" },
                      { link: "/collections/sandals", text: "Sandals" },
                      { link: "/collections/boots", text: "Boots" },
                    ]}
                  />
                </li>
                <li>
                  <a
                    className="block px-8 py-2 hover:bg-invert/4"
                    href="/pages/lookbook-summer"
                  >
                    Lookbook
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4 bg-invert/3 p-8">
              <LoginEntry className="md:hidden" /> Localization
              <SocialMedia />
            </div>
          </div>
        </div>
      </section>
    </details>
  );
}
