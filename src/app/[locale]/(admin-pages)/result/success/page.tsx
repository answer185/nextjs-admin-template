"use client"
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl'
export default function SuccessResult() {
  const router = useRouter();
  const t = useTranslations("page-result")

  return (
    <div className="h-full flex flex-col items-center justify-center py-16">
      <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold mb-2">{t("success")}</h1>
      <div className="text-muted-foreground mb-4 text-center">
        {t.rich("successDesc", {
          br: () => <br />,
        })}
      </div>
      <div className="flex gap-4 mt-6">
        <Button onClick={() => router.push("/dashboard")}>{t("back")}</Button>
        <Button variant="outline" onClick={() => router.push("/list")}>
          {t("backToProject")}
        </Button>
      </div>
    </div>
  );
}