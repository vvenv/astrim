import EmailSubscribe from "@/components/EmailSubscribe";
import Localization from "@/components/Localization";
import PaymentMethods from "@/components/PaymentMethods";
import SocialMedia from "@/components/SocialMedia";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="bg-default px-4 pb-24 pt-8">
      <div className="mt-8 flex flex-col items-center gap-8 border-t border-default/8 pt-8">
        <EmailSubscribe />
        <SocialMedia />
      </div>
      <div className="mt-8 flex flex-col items-center gap-8 border-t border-default/8 pt-8">
        <Localization />
        <PaymentMethods />
        <section className="flex flex-col items-center gap-2">
          <p>&copy; {new Date().getFullYear()} vvenv. All rights reserved.</p>
          <p className="mt-4 flex justify-center gap-4">
            <ThemeSwitcher />
            <a
              className="block p-0.5 text-default/50 no-underline hover:text-default/75"
              href="https://github.com/vvenv/astrim"
              target="_blank"
              title="Go to Astrim's GitHub repository"
            >
              <i className="i-astrim-github block size-5"></i>
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
}
