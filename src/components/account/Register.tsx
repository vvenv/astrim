import i18n from "@/i18n/i18n.mjs";
import { Input } from "../form/Input";
import { Button } from "../form/Button";

export default function AccountLogin() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {i18n.t("Create account")}
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
          name="customer[first_name]"
          id="RegisterForm-FirstName"
          autoComplete="given-name"
          placeholder={i18n.t("First name")}
        />
        <Input
          type="password"
          name="customer[last_name]"
          id="RegisterForm-LastName"
          autoComplete="family-name"
          placeholder={i18n.t("Last name")}
        />
        <Input
          type="email"
          name="customer[email]"
          id="RegisterForm-Email"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={i18n.t("Email")}
        />
        <Input
          type="password"
          name="customer[password]"
          id="RegisterForm-Password"
          autoComplete="current-password"
          placeholder={i18n.t("Password")}
        />

        <Button className="mt-6">{i18n.t("Create")}</Button>
      </form>
    </section>
  );
}
