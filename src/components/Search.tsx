import { Dialog } from '@base-ui-components/react'

export function Search() {
  return (
    <div id="search">
      <Dialog.Root>
        <Dialog.Trigger
          className="flex p-3 text-default"
          type="button"
          aria-label="Toggle search"
        >
          <i className="i-astrim-search block size-5 cursor-pointer transition-transform hover:scale-110"></i>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop
            className="fixed inset-0 z-20 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity closed:opacity-0"
          >
          </Dialog.Backdrop>
          <Dialog.Popup
            className="fixed left-0 right-0 top-0 z-20 translate-y-0 bg-default transition-transform closed:-translate-y-full"
          >
            <form className="flex items-center justify-center gap-2 p-4" id="search-form" action="/search" method="get" role="search">
              <div className="flex flex-1 items-center border border-default/50 pr-2 focus:border-2 focus:border-default">
                <input
                  className="w-full appearance-none bg-transparent px-3 py-2 outline-none"
                  type="search"
                  name="q"
                  defaultValue=""
                  placeholder="Search"
                  role="combobox"
                  aria-expanded="true"
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
                  <i className="i-astrim-search block size-5"></i>
                </button>
              </div>
              <Dialog.Close
                className="p-2 text-default"
                type="reset"
                id="search-form-reset"
                aria-label="Close search"
              >
                <i className="i-astrim-close block size-5"></i>
              </Dialog.Close>
            </form>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
