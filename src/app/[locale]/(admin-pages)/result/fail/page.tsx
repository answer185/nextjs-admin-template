"use client"
import { Button } from "@/components/ui/button";
import { XCircle, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl'
export default function FailResult() {
  const router = useRouter();
  const t = useTranslations("page-result")
  return (
    <div className="h-full flex flex-col items-center justify-center py-16">
      <XCircle className="text-red-500 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold mb-2">{t("fail")}</h1>
      <div className="text-muted-foreground mb-4 text-center">
        {t.rich("failDesc", {
          br: () => <br />,
        })}
      </div>
      {/* 失败原因列表 */}
      <div className="w-full max-w-md bg-muted/50 rounded-lg p-6 shadow flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="w-5 h-5" />
          {t("failReason1")}
        </div>
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="w-5 h-5" />
          {t("failReason2")}
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => history.back()}>{t("backToModify")}</Button>
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          {t("back")}
        </Button>
      </div>
    </div>
  );
}