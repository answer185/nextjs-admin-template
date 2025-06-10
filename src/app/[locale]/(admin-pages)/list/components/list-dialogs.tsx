"use client"
import { useList } from "../context/list-context"
import ListImportDialog from "./list-import-dialog"
import ListMutaterDrawer from "./list-mutate-drawer"

export default function  ListDialogs() {
  const {open, setOpen, currentRow, setCurrentRow} = useList()
  return (
    <>
      <ListImportDialog 
        key="list-import"
        open={open === "import"}
        onOpenChange={() => setOpen('import')}
      />
      <ListMutaterDrawer
        key='task-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />
      {currentRow && open === 'update' && (
        <ListMutaterDrawer
          key={`task-update-${currentRow.id}`}
          open={open === 'update'}
          onOpenChange={() => {
            setOpen('update')
            setTimeout(() => {
              setCurrentRow(null)
            }, 500)
          }}
          currentRow={currentRow}
        />
      )}
    </>
  )
}
