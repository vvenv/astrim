import { t } from '@/services/i18n'
import { ComboInput } from './form/ComboInput'

export function EmailSubscribe() {
  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-base md:text-2xl">
        {t('Subscribe to our emails')}
      </h2>
      <form className="relative">
        <ComboInput
          id="subscribe-email"
          name="email"
          label={t('Email')}
          type="email"
          size={30}
          aria-required="true"
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="email"
          required
        />
        <button
          className="absolute right-5 top-3.5"
          type="submit"
          aria-label={t('Subscribe')}
        >
          <i className="i-astrim-arrow block size-5"></i>
        </button>
      </form>
    </section>
  )
}
