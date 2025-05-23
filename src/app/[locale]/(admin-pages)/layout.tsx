import { SiteHeader } from "@/components/layouts/header"
import { AppSidebar } from "@/components/layouts/sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-4 lg:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
