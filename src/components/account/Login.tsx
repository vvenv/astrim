import { i18n, t } from '@/services/i18n'
import { ComboInput } from '../form/ComboInput'

export function AccountLogin() {
  return (
    <section className="mx-auto max-w-sm flex flex-col gap-12">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {t('Login')}
      </h1>
      <form
        className="flex flex-col gap-6"
        method="post"
        action={`/${i18n.language}/account/login`}
        id="customer_login"
        acceptCharset="UTF-8"
        noValidate
      >
        <ComboInput
          type="email"
          name="customer[email]"
          id="CustomerEmail"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          label={t('Email')}
        />
        <ComboInput
          type="password"
          name="customer[password]"
          id="CustomerPassword"
          autoComplete="current-password"
          label={t('Password')}
        />

        <a
          className="self-start justify-self-start underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/recover`}
        >
          {t('Forgot your password?')}
        </a>

        <button className="mt-6 btn-primary" type="submit">{t('Sign in')}</button>

        <a
          className="self-center underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/register`}
        >
          {t('Create account')}
        </a>
      </form>
    </section>
  )
}
