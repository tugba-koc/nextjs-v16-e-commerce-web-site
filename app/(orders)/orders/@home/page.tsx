import { useTranslations } from "next-intl";
const Home = () => {
  const t = useTranslations("Orders");
  return <div>{t("homePage")}</div>;
};

export default Home;
