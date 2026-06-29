'use client'
import { Link, useLocation } from '@tanstack/react-router'
import { Home, Inbox, Users, ClipboardList, Package, Radio, Flask, Settings } from 'lucide-react'

const NAV = [
  { path: '/_app/dashboard', label: 'Dashboard', icon: Home },
  { path: '/_app/inbox', label: 'Inbox', icon: Inbox },
  { path: '/_app/handover', label: 'Handover', icon: ClipboardList },
  { path: '/_app/orders', label: 'Orders', icon: Package },
  { path: '/_app/customers', label: 'Pelanggan', icon: Users },
  { path: '/_app/products', label: 'Products', icon: Package },
  { path: '/_app/broadcast', label: 'Broadcast', icon: Radio },
  { path: '/_app/workflow', label: 'Workflow', icon: Flask },
  { path: '/_app/ai-agents', label: 'AI Agents', icon: Home },
  { path: '/_app/ai', label: 'AI Playground', icon: Flask },
  { path: '/_app/knowledge', label: 'Knowledge Base', icon: ClipboardList },
  { path: '/_app/settings', label: 'Settings', icon: Settings },
]

export function AppSidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-card text-card-foreground">
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {NAV.map((item) => {
          const active =
            pathname === item.path || pathname.startsWith(`${item.path}/`)
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
