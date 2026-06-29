import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getRouter } from './router'
import './styles.css'

const router = getRouter()
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{router}
	</StrictMode>,
)
