import ListButtons from './components/list-buttons'
import ListTitle from './components/list-title'
import ListProvider from './context/list-context'
import ListDialogs from './components/list-dialogs'

export default function Page() {
  return (
    <ListProvider>
      <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
        <ListTitle />
        <ListButtons />
      </div>
      <ListDialogs />
    </ListProvider>
  )
}
