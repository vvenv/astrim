import { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    const closeSearch = () => {
      document.querySelector("#search")?.removeAttribute("open");
    };
    const clickOutside = (event: any) => {
      const el = document.querySelector("#search-form");
      if (!el?.contains(event.target)) {
        closeSearch();
      }
    };
    document.documentElement.addEventListener("click", clickOutside);
    document
      .querySelector("#search-form-reset")
      ?.addEventListener("click", closeSearch);
    return () => {
      document.documentElement.removeEventListener("click", clickOutside);
      document
        .querySelector("#search-form-reset")
        ?.removeEventListener("click", closeSearch);
    };
  }, []);
  return (
    <details className="group" id="search">
      <summary className="flex p-3 text-default" aria-label="Toggle search">
        <i className="i-astrim:search block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      </summary>
      <section>
        <div className="fixed inset-0 z-20 bg-black/50 opacity-0 transition-opacity group-open:opacity-100"></div>
        <form
          className="absolute inset-0 z-20 flex items-center justify-center gap-2 bg-default px-4 py-3 transition-transform -translate-y-full group-open:translate-y-0"
          id="search-form"
          action="/search"
          method="get"
          role="search"
        >
          <div className="flex flex-1 items-center border border-default/50 pr-2 focus:border-2 focus:border-default">
            <input
              className="w-full appearance-none px-3 py-1 outline-none"
              type="search"
              name="q"
              defaultValue=""
              placeholder="Search"
              role="combobox"
              aria-expanded="true"
              aria-owns="predictive-search-results"
              aria-controls="predictive-search-results"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-activedescendant=""
            />
            <button
              className="p-2 text-default"
              type="submit"
              aria-label="Search"
            >
              <i className="i-astrim:search block size-5"></i>
            </button>
          </div>
          <button
            className="p-2 text-default"
            type="reset"
            id="search-form-reset"
            aria-label="Close search"
          >
            <i className="i-astrim:close block size-5"></i>
          </button>
        </form>
      </section>
    </details>
  );
}
