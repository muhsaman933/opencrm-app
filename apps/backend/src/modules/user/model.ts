# Backend Source Reference - src/modules/user/model.ts

Original source path: `apps/backend/src/modules/user/model.ts`
Line count: 51
SHA-256: `acd693b172a81e76a5b4c06de2763bbce2ede653d0269d6bf1900719168033b6`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from 'elysia'

// User response models
export const UserModel = {
	user: t.Object({
		id: t.String(),
		email: t.String(),
		name: t.Nullable(t.String()),
		role: t.Nullable(t.String()),
		avatar_url: t.Nullable(t.String()),
		active: t.Nullable(t.Boolean()),
		created_at: t.Nullable(t.Date()),
	}),

	users: t.Array(
		t.Object({
			id: t.String(),
			email: t.String(),
			name: t.Nullable(t.String()),
			role: t.Nullable(t.String()),
			avatar_url: t.Nullable(t.String()),
			active: t.Nullable(t.Boolean()),
			created_at: t.Nullable(t.Date()),
		}),
	),

	userProfile: t.Object({
		id: t.String(),
		email: t.String(),
		name: t.Nullable(t.String()),
		role: t.Nullable(t.String()),
		avatar_url: t.Nullable(t.String()),
		phone: t.Nullable(t.String()),
		account: t.Nullable(
			t.Object({
				id: t.String(),
				name: t.String(),
			}),
		),
	}),
} as const

// Request models
export const UserRequestModel = {
	updateProfile: t.Object({
		name: t.Optional(t.String()),
		avatar_url: t.Optional(t.String()),
		phone: t.Optional(t.String()),
	}),
} as const

````
