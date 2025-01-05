import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig( {
	integrations: [ react(), tailwind() ],
	site: 'https://user12987.github.io',
	base: '/lease_comparison/',
	redirects: {
		'/': '/en/',
	},
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'th' ],
		routing: {
			prefixDefaultLocale: false
		}
	}
} )
