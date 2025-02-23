import i18n from "@/i18n";

export default function Banner() {
  return (
    <div
      className="border-b border-default/8 bg-default p-2 text-center text-sm text-default tracking-widest"
      role="region"
      aria-label="Announcement"
    >
      {i18n.t("Free shipping available on all orders!")}
    </div>
  );
}
