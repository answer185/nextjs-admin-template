export default function AdminPageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Admin Page Layout</h1>
      <div>{children}</div>
    </>
  )
}