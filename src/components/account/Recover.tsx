import i18n, { t } from '@/i18n'
import { Button } from '@headlessui/react'
import { ComboInput } from '../form/ComboInput'

export default function AccountRecover() {
  return (
    <section className="mx-auto max-w-sm flex flex-col gap-6">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {t('Reset your password')}
      </h1>
      <p className="text-center">
        {t('We will send you an email to reset your password')}
      </p>
      <form
        className="my-6 flex flex-col gap-6"
        method="post"
        action="/account/recover"
        accept-charset="UTF-8"
      >
        <ComboInput
          type="email"
          name="customer[email]"
          id="RecoverEmail"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          label={t('Email')}
        />
        <Button className="mt-6 btn-primary">{t('Submit')}</Button>
        <a
          className="self-center underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/login`}
        >
          {t('Login')}
        </a>
      </form>
    </section>
  )
}
