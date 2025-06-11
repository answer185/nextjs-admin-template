"use client"
import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
} from '@tabler/icons-react'
import { Separator } from '@/components/ui/separator'
import SidebarNav from './components/sidebar-nav'

export default function Settings({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='space-y-0.5'>
        <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
          Settings
        </h1>
        <p className='text-muted-foreground'>
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className='my-4 lg:my-6' />
      <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12'>
        <aside className='top-0 lg:sticky lg:w-1/5'>
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className='flex w-full overflow-y-hidden p-1'>
          {children}
        </div>
      </div>
    </>
  )
}

const sidebarNavItems = [
  {
    title: 'Account',
    icon: <IconTool size={18} />,
    href: '/setting/account',
  },
  {
    title: 'Appearance',
    icon: <IconPalette size={18} />,
    href: '/setting/appearance',
  },
  {
    title: 'Notifications',
    icon: <IconNotification size={18} />,
    href: '/setting/notifications',
  },
  {
    title: 'Display',
    icon: <IconBrowserCheck size={18} />,
    href: '/setting/display',
  },
]
