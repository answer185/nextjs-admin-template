export default function AdminPageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Full Width Page</h1>
      <div>{children}</div>
    </>
  )
}