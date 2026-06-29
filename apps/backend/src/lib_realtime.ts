# Backend Source Reference - src/lib/realtime.ts

Original source path: `apps/backend/src/lib/realtime.ts`
Line count: 39
SHA-256: `ed3cff5ce491a647ebcc6c79c97a6079c791a6c5342bcf8fbc30e4c7fbc2f8c5`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import type { Server } from 'socket.io'
import { emitRealtimeToRoom } from './realtime-emitter'

const REALTIME_IO_KEY = '__SCALEBIZ_IO__'
const APP_MODE = (process.env.APP_MODE || 'api').toLowerCase()

type RealtimeFallback = {
	to: (room: string) => {
		emit: (event: string, payload: unknown) => void
	}
}

let fallbackRealtime: RealtimeFallback | null = null

export function setRealtimeIO(io: Server) {
	;(globalThis as any)[REALTIME_IO_KEY] = io
}

export function getRealtimeIO(): Server | null {
	const io = (globalThis as any)[REALTIME_IO_KEY] as Server | undefined
	if (io) return io

	if (APP_MODE !== 'api') {
		if (!fallbackRealtime) {
			fallbackRealtime = {
				to: (room: string) => ({
					emit: (event: string, payload: unknown) => {
						emitRealtimeToRoom(room, event, payload)
					},
				}),
			}
		}

		return fallbackRealtime as unknown as Server
	}

	return null
}

````
