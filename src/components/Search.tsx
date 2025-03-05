import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Input,
} from '@headlessui/react'
import { useState } from 'react'

export function Search() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div id="search">
      <Button
        className="flex p-3 text-default"
        aria-label="Toggle search"
        onClick={open}
      >
        <i className="i-astrim-search block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      </Button>
      <Dialog
        className="relative z-30"
        transition
        open={isOpen}
        onClose={close}
      >
        <DialogBackdrop
          className="fixed inset-0 z-20 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity data-[closed]:opacity-0"
          transition
        >
        </DialogBackdrop>
        <form id="search-form" action="/search" method="get" role="search">
          <DialogPanel
            className="fixed left-0 right-0 top-0 z-20 flex translate-y-0 items-center justify-center gap-2 bg-default p-4 transition-transform data-[closed]:-translate-y-full"
            transition
          >
            <div className="flex flex-1 items-center border border-default/50 pr-2 focus:border-2 focus:border-default">
              <Input
                className="w-full appearance-none bg-transparent px-3 py-2 outline-none"
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
              <Button
                className="p-2 text-default"
                type="submit"
                aria-label="Search"
              >
                <i className="i-astrim-search block size-5"></i>
              </Button>
            </div>
            <Button
              className="p-2 text-default"
              type="reset"
              id="search-form-reset"
              aria-label="Close search"
              onClick={close}
            >
              <i className="i-astrim-close block size-5"></i>
            </Button>
          </DialogPanel>
        </form>
      </Dialog>
    </div>
  )
}
