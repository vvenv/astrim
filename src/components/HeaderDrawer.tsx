import { COLLECTIONS } from '@/consts'
import { Button, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import { CollectionDisclosure } from './CollectionDisclosure'
import { Localization } from './Localization'
import { LoginEntry } from './LoginEntry'
import { SocialMedia } from './SocialMedia'

export function HeaderDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div className="md:hidden" id="header-drawer">
      <Button
        className="flex p-3 text-default"
        aria-label="Toggle menu"
        onClick={open}
      >
        <i className="i-astrim-hamburger block size-5 cursor-pointer transition-transform hover:scale-110"></i>
      </Button>
      <Dialog
        className="relative z-30"
        transition
        open={isOpen}
        onClose={close}
        data-testid="header-drawer-content"
      >
        <DialogBackdrop
          className="fixed inset-0 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity data-[closed]:opacity-0"
          transition
        >
        </DialogBackdrop>
        <DialogPanel
          className="fixed left-0 top-0 h-full w-full flex flex-col translate-x-0 bg-default transition-transform md:w-100 data-[closed]:-translate-x-full"
          transition
        >
          <button
            className="m-8"
            type="button"
            aria-label="Close menu"
            onClick={close}
          >
            <i className="i-astrim-close block size-5 cursor-pointer transition-transform hover:scale-110"></i>
          </button>
          <div className="min-h-0 flex flex-1 flex-col">
            <nav className="min-h-0 flex-1 overflow-y-auto">
              <ul>
                {
                  COLLECTIONS.map(({ title, links }) => (
                    <li key={title}>
                      <CollectionDisclosure
                        title={title}
                        links={links}
                      />
                    </li>
                  ))
                }
                <li>
                  <a
                    className="block px-8 py-3 hover:bg-invert/4"
                    href="/pages/lookbook-summer"
                  >
                    Lookbook
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col items-start gap-4 bg-invert/3 p-8">
              <LoginEntry />
              <Localization seamless />
              <SocialMedia />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
