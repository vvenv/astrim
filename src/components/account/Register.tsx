import { i18n, t } from '@/i18n'
import { ComboInput } from '../form/ComboInput'

export function AccountRegister() {
  return (
    <section className="mx-auto max-w-sm flex flex-col gap-12">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {t('Create account')}
      </h1>
      <form
        className="flex flex-col gap-6"
        method="post"
        action={`/${i18n.language}/account/register`}
        id="customer_register"
        acceptCharset="UTF-8"
        noValidate
      >
        <ComboInput
          name="customer[first_name]"
          id="RegisterForm-FirstName"
          autoComplete="given-name"
          label={t('First name')}
        />
        <ComboInput
          type="password"
          name="customer[last_name]"
          id="RegisterForm-LastName"
          autoComplete="family-name"
          label={t('Last name')}
        />
        <ComboInput
          type="email"
          name="customer[email]"
          id="RegisterForm-Email"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          label={t('Email')}
        />
        <ComboInput
          type="password"
          name="customer[password]"
          id="RegisterForm-Password"
          autoComplete="current-password"
          label={t('Password')}
        />
        <button className="mt-6 btn-primary" type="submit">{t('Create')}</button>
      </form>
    </section>
  )
}
