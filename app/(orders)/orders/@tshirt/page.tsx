import { useTranslations } from "next-intl";
const Tshirt = () => {
  const t = useTranslations("Orders");
  return <div>{t("tshirtPage")}</div>;
};

export default Tshirt;
