"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function UnauthorisedError() {
  const router = useRouter()
  const t = useTranslations("page-error")
  return (
    <div className='m-auto flex flex-col items-center justify-center'>
      <h1 className='text-[7rem] leading-tight font-bold'>401</h1>
      <span className='font-medium'>{t("unauthorized")}</span>
      <p className='text-muted-foreground text-center'>
        {t.rich("unauthorizedDesc", {
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
