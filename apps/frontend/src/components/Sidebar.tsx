import { useAppContext } from '@/routes/_app'
import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

const MENU = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/inbox', label: 'Inbox' },
  { to: '/handover', label: 'Handover' },
  { to: '/orders', label: 'Orders' },
  { to: '/customers', label: 'Pelanggan' },
  { to: '/products', label: 'Products' },
  { to: '/broadcast', label: 'Broadcast' },
  { to: '/workflow', label: 'Workflow' },
  { to: '/ai-agents', label: 'AI Agents' },
  { to: '/ai', label: 'AI Playground' },
  { to: '/knowledge', label: 'Knowledge Base' },
  { to: '/settings', label: 'Settings' },
]

export default function Sidebar({ agent, isCollapsed, onClose }: { agent: any; isCollapsed?: boolean; onClose?: () => void }) {
  const { appId } = useAppContext() ?? {}
  const location = useLocation()
  return (
    <aside className={cn('flex h-full w-72 flex-col border-r bg-background/70 p-4', isCollapsed && 'w-16')}>
      <div className="mb-6 text-lg font-semibold">OpenCRM</div>
      <nav className="flex-1 space-y-1">
        {MENU.map((item) => {
          const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={cn('block rounded-md px-3 py-2 text-sm', active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent')}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="text-xs text-muted-foreground">{agent?.email ?? ''}</div>
    </aside>
  )
}
