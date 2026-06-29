import { Link, useLocation } from '@tanstack/react-router'

const items = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/inbox', label: 'Inbox' },
  { to: '/orders', label: 'Orders' },
  { to: '/customers', label: 'Customers' },
  { to: '/broadcast', label: 'Broadcast' },
]

export default function BottomNav({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation()
  return (
    <nav className="fixed inset-x-0 bottom-0 flex items-center justify-around border-t bg-background/90 px-2 py-2 lg:hidden">
      {items.map((item) => {
        const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
        return (
          <Link
            key={item.to}
            to={item.to}
            className={active ? 'text-primary' : 'text-muted-foreground'}
            onClick={(e) => {
              if (item.to === '/dashboard') return
              // keep behavior; clicking menu separately opens sidebar
            }}
          >
            <div className="text-xs">{item.label}</div>
          </Link>
        )
      })}
      <button type="button" className="text-xs text-muted-foreground" onClick={onMenuClick}>Menu</button>
    </nav>
  )
}
