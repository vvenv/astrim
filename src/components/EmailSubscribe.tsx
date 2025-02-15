import { createT } from "@/utils/i18n";

export default async function EmailSubscribe() {
  const t = await createT();

  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-base md:text-2xl">{t("Subscribe to our emails")}</h2>
      <form className="relative">
        <input
          className="peer w-full border border-default/50 bg-transparent px-5 py-3 focus:pb-1 focus:pt-5 not-placeholder-shown:pb-1 not-placeholder-shown:pt-5 placeholder:opacity-0"
          type="email"
          id="subscribe-email"
          name="email"
          size={30}
          aria-required="true"
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="email"
          placeholder="Email"
          required
        />
        <label
          className="absolute left-5 top-3 text-base transition-all peer-focus:top-1.5 peer-not-placeholder-shown:top-1.5 peer-focus:text-xs peer-not-placeholder-shown:text-xs"
          htmlFor="subscribe-email"
          aria-controls="subscribe-email"
        >
          {t("Email")}
        </label>
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
