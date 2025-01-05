import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig( {
	integrations: [ react(), tailwind() ],
	base: '/lease_comparison/',
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'th' ],
		routing: {
			prefixDefaultLocale: false
		}
	}
} )
