import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import {showSubmittedData} from "@/utils/show-submitted-data"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export default function ListImportDialog({ open, onOpenChange }: Props) {
  const t = useTranslations("page-list")
  const t2 = useTranslations("common")
  
  const formSchema = z.object({
    file: z
      // .instanceof(FileList)
      .any()
      .refine((files) => files.length > 0, {
        message: t("uploadTip"),
      })
      .refine(
        (files) => ['text/csv'].includes(files?.[0]?.type),
        t("uploadCSVTip")
      ),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { file: undefined },
  })

  const fileRef = form.register('file')

  const onSubmit = () => {
    const file = form.getValues('file')

    if (file && file[0]) {
      const fileDetails = {
        name: file[0].name,
        size: file[0].size,
        type: file[0].type,
      }
      showSubmittedData(fileDetails, 'You have imported the following file:')
    }
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val)
        form.reset()
      }}
    >
      <DialogContent className="gap-2 sm:max-w-sm">
        <DialogHeader className="text-left">
          <DialogTitle><span>{t("importTitle")}</span></DialogTitle>
          <DialogDescription>
            {t("importDesc")}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id='list-import-form' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='file'
              render={() => (
                <FormItem className='mb-2 space-y-1'>
                  <FormLabel>{t2("file")}</FormLabel>
                  <FormControl>
                    <Input type='file' {...fileRef} className='h-8' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className='gap-2'>
          <DialogClose asChild>
            <Button variant='outline'>{t2("close")}</Button>
          </DialogClose>
          <Button type='submit' form='list-import-form'>
            {t2("import")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}