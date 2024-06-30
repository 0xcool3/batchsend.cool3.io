import { useTranslation } from "react-i18next";
export default () => {
  // @ts-ignore
  const { t } = useTranslation("translation");
  return <div>button test {t("hi")}</div>;
};
