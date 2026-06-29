'use client'
import { createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/AppSidebar'

export const Route = createFileRoute('/_app')({
  component: () => (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1" />
    </div>
  ),
})
