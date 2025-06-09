"use client"
import { Button } from "@/components/ui/button"
import { IconDatabaseImport, IconPlus } from "@tabler/icons-react"
import { useList } from "../context/list-context"
import { useTranslations } from "next-intl"

export default function ListButtons() {
  const { setOpen } = useList()
  const t = useTranslations("common")
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        className="space-x-1"
        onClick={() => setOpen("import")}
      >
        <span>{t("import")}</span> <IconDatabaseImport size={18} />
      </Button>
      <Button>
        <span>{t("create")}</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}