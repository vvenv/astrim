import { i18n } from '@/services/i18n'
import { Dialog } from '@base-ui-components/react'
import { Localization } from './Localization'
import { LoginEntry } from './LoginEntry'
import { SocialMedia } from './SocialMedia'

export function HeaderDrawer() {
  return (
    <div className="md:hidden" id="header-drawer">
      <Dialog.Root>
        <Dialog.Trigger
          className="flex p-3 text-default"
          type="button"
          aria-label="Toggle menu"
        >
          <i className="i-astrim-hamburger block size-5 cursor-pointer transition-transform hover:scale-110"></i>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop
            className="fixed inset-0 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity closed:opacity-0"
          >
          </Dialog.Backdrop>
          <Dialog.Popup
            className="fixed left-0 top-0 z-30 h-full w-full flex flex-col translate-x-0 bg-default transition-transform md:w-100 closed:-translate-x-full"
          >
            <Dialog.Close
              className="m-8"
            >
              <i className="i-astrim-close block size-5 cursor-pointer transition-transform hover:scale-110"></i>
            </Dialog.Close>
            <div
              className="min-h-0 flex flex-1 flex-col"
              data-testid="header-drawer-content"
            >
              <nav className="min-h-0 flex-1 overflow-y-auto">
                <ul>
                  <li>
                    <a
                      className="block px-8 py-3 hover:bg-invert/4"
                      href={`/${i18n.language}/collections/men`}
                    >
                      Men
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-8 py-3 hover:bg-invert/4"
                      href={`/${i18n.language}/collections/women`}
                    >
                      Women
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-8 py-3 hover:bg-invert/4"
                      href={`/${i18n.language}/collections/unisex`}
                    >
                      Unisex
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-8 py-3 hover:bg-invert/4"
                      href={`/${i18n.language}/collections`}
                    >
                      Collections
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
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
