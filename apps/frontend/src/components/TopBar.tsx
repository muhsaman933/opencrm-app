import { useAppContext } from '@/routes/_app'

export default function TopBar() {
  const { agent, toggleSidebar } = useAppContext() ?? {}
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <button type="button" className="mr-2 rounded-md px-2 py-1 hover:bg-accent lg:hidden" onClick={toggleSidebar}>Menu</button>
      <div className="font-medium">OpenCRM</div>
      <div className="text-sm text-muted-foreground">{agent?.name ?? ''}</div>
    </header>
  )
}
