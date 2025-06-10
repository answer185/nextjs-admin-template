import ListButtons from './components/list-buttons'
import ListTitle from './components/list-title'
import ListProvider from './context/list-context'
import ListDialogs from './components/list-dialogs'
import DataTable from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'

export default function Page() {
  return (
    <ListProvider>
      <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
        <ListTitle />
        <ListButtons />
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
        <DataTable data={tasks} columns={columns} />
      </div>
      <ListDialogs />
    </ListProvider>
  )
}
