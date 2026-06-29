import { useEffect, useState } from 'react'

export function useTimezone() {
  const [zone, setZone] = useState('UTC')
  useEffect(() => {
    try {
      setZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    } catch {
      setZone('UTC')
    }
  }, [])
  return zone
}
