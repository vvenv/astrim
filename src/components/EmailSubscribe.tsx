import i18n from "@/i18n/i18n.mjs";
import { Input } from "./form/Input";

export default function EmailSubscribe() {
  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-base md:text-2xl">
        {i18n.t("Subscribe to our emails")}
      </h2>
      <form className="relative">
        <Input
          id="subscribe-email"
          name="email"
          placeholder={i18n.t("Email")}
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
          aria-label="Subscribe"
        >
          <i className="i-astrim-arrow block size-5"></i>
        </button>
      </form>
    </section>
  );
}
