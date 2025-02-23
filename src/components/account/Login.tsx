import i18n from "@/i18n";
import { Input } from "../form/Input";
import { Button } from "../form/Button";

export default function AccountLogin() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {i18n.t("Login")}
      </h1>
      <form
        className="flex flex-col gap-6"
        method="post"
        action={`/${i18n.language}/account/login`}
        id="customer_login"
        acceptCharset="UTF-8"
        noValidate
      >
        <Input
          type="email"
          name="customer[email]"
          id="CustomerEmail"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={i18n.t("Email")}
        />
        <Input
          type="password"
          name="customer[password]"
          id="CustomerPassword"
          autoComplete="current-password"
          placeholder={i18n.t("Password")}
        />

        <a
          className="self-start justify-self-start underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/recover`}
        >
          {i18n.t("Forgot your password?")}
        </a>

        <Button className="mt-6">{i18n.t("Sign in")}</Button>

        <a
          className="self-center underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/register`}
        >
          {i18n.t("Create account")}
        </a>
      </form>
    </section>
  );
}
