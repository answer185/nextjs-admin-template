import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export default function MaintenanceError() {
  const t = useTranslations("page-error")
  return (
    <div className='m-auto flex flex-col items-center justify-center gap-2'>
      <h1 className='text-[7rem] leading-tight font-bold'>503</h1>
      <span className='font-medium'>{t("maintenance")}</span>
      <p className='text-muted-foreground text-center'>
        {t.rich("maintenanceDesc", {
          br: () => <br />,
        })}
      </p>
      <div className='mt-6 flex gap-4'>
        <Button variant='outline'>{t("learnMore")}</Button>
      </div>
    </div>
  )
}
