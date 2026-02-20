import { useTranslations } from "next-intl";
const Comments = () => {
  const t = useTranslations("Comments");
  return <div>{t("page")}</div>;
};

export default Comments;
