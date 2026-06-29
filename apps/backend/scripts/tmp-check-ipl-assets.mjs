# Backend Source Reference - scripts/tmp-check-ipl-assets.mjs

Original source path: `apps/backend/scripts/tmp-check-ipl-assets.mjs`
Line count: 51
SHA-256: `d9e31cd49fe551571a9bd103b073aed937a52ccfc93a091a28a21b851f4818e2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````js
import 'dotenv/config'
import pg from 'pg'

const conn = process.env.DATABASE_URL
if (!conn) throw new Error('DATABASE_URL missing')

const chatbotId = '1c444e9f-f06c-4fe1-b1b7-7ddb35a6f1b9'
const client = new pg.Client({ connectionString: conn })
await client.connect()

const rs = await client.query(
  `select id, title, type, regexp_replace(coalesce(content,''), E'[\\n\\r\\t]+', ' ', 'g') as content
   from knowledge_sources
   where chatbot_id = $1 and is_active = true
   order by updated_at desc`,
  [chatbotId],
)

const urlRegex = /https?:\/\/[^\s"'<>]+/gi

for (const row of rs.rows) {
  const content = String(row.content || '')
  if (!/ipl glow/i.test(content) && !/ipl\s*glow/i.test(row.title || '')) continue

  const urls = Array.from(content.match(urlRegex) || [])
  const normalizedUrls = Array.from(new Set(urls))

  console.log('\n---')
  console.log('source:', row.title)
  console.log('contains_ipl_glow:', /ipl glow/i.test(content))
  console.log('url_count:', normalizedUrls.length)

  const keyword = 'ipl glow'
  const idx = content.toLowerCase().indexOf(keyword)
  if (idx >= 0) {
    const start = Math.max(0, idx - 280)
    const end = Math.min(content.length, idx + 680)
    console.log('snippet:', content.slice(start, end))
  }

  const urlCandidates = normalizedUrls.filter((u) =>
    /ipl|glow|skin|promo|tiktok|flash/i.test(u),
  )
  console.log('urls:')
  for (const u of urlCandidates.slice(0, 30)) {
    console.log(' -', u)
  }
}

await client.end()

````
