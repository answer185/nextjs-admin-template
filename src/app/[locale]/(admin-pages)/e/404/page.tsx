"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export default function NotFoundError() {
  const router = useRouter()
  const t = useTranslations("page-error")
  return (
    <div className='m-auto flex flex-col items-center justify-center'>
      <h1 className='text-[7rem] leading-tight font-bold'>404</h1>
      <span className='font-medium'>{t("notFound")}</span>
      <p className='text-muted-foreground text-center'>
        {t.rich("notFoundDesc", {
          br: () => <br />,
        })}
      </p>
      <div className='mt-6 flex gap-4'>
        <Button variant='outline' onClick={() => history.go(-1)}>
          {t("back")}
        </Button>
        <Button onClick={() => router.push('/dashboard')}>{t("backHome")}</Button>
      </div>
    </div>
  )
}
