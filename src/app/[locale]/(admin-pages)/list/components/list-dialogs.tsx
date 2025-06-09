"use client"
import { useList } from "../context/list-context"
import ListImportDialog from "./list-import-dialog"
export default function  ListDialogs() {
  const {open, setOpen, currentRow, setCurrentRow} = useList()
  return (
    <>
      <ListImportDialog 
        key="list-import"
        open={open === "import"}
        onOpenChange={() => setOpen('import')}
      />
    </>
  )
}
