import i18n from '@/i18n'
import { Button } from '@headlessui/react'
import { ComboInput } from '../form/ComboInput'

export default function AccountLogin() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {i18n.t('Create account')}
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
          name="customer[first_name]"
          id="RegisterForm-FirstName"
          autoComplete="given-name"
          label={i18n.t('First name')}
        />
        <ComboInput
          type="password"
          name="customer[last_name]"
          id="RegisterForm-LastName"
          autoComplete="family-name"
          label={i18n.t('Last name')}
        />
        <ComboInput
          type="email"
          name="customer[email]"
          id="RegisterForm-Email"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          label={i18n.t('Email')}
        />
        <ComboInput
          type="password"
          name="customer[password]"
          id="RegisterForm-Password"
          autoComplete="current-password"
          label={i18n.t('Password')}
        />
        <Button className="mt-6 btn-primary">{i18n.t('Create')}</Button>
      </form>
    </section>
  )
}
