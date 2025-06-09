"use client"
import useDialogState from '@/hooks/use-dialog-state'
import React, { useState } from 'react'
import { Task } from '../data/schema'

type ListDialogType = "create" | "update" | "delete" | "import"
interface ListContextType {
  open: ListDialogType | null
  setOpen: (str: ListDialogType | null) => void
  currentRow: Task | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Task | null>>
}
const ListContext = React.createContext<ListContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function ListProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ListDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Task | null>(null)

  return (
    <ListContext value={{open, setOpen, currentRow, setCurrentRow}}>
      {children}
    </ListContext>
  )
}

export const useList = () => {
  const listContext = React.useContext(ListContext)
  if (!listContext) {
    throw new Error('useList has to be used with in <ListContext>')
  }
  return listContext
}
