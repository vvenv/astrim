import i18n from "@/i18n";
import { Input } from "../form/Input";
import { Button } from "../form/Button";

export default function AccountRecover() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-3xl" tabIndex={-1}>
        {i18n.t("Reset your password")}
      </h1>
      <p className="text-center">
        {i18n.t("We will send you an email to reset your password")}
      </p>
      <form
        className="my-6 flex flex-col gap-6"
        method="post"
        action="/account/recover"
        accept-charset="UTF-8"
      >
        <Input
          type="email"
          name="customer[email]"
          id="RecoverEmail"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={i18n.t("Email")}
        />
        <Button className="mt-6">{i18n.t("Submit")}</Button>
        <a
          className="self-center underline underline-offset-3 hover:underline-3"
          href={`/${i18n.language}/account/login`}
        >
          {i18n.t("Login")}
        </a>
      </form>
    </section>
  );
}
