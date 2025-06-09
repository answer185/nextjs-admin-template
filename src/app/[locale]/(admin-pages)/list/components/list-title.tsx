import { useTranslations } from "next-intl"

export default function ListTitle() {
  const t = useTranslations("page-list")
  console.log(t("importTitle"), t("importDesc"), "sh-1")
  return (
    <div>
      <h2 className='text-2xl font-bold tracking-tight'>{t("title")}</h2>
      <p className='text-muted-foreground'>
        {t("desc")}
      </p>
    </div>
  )
}