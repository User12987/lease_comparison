// src/i18n/utils.ts

import { ui, defaultLang, languages } from './ui'

export function getLangFromUrl(url: URL) {
	const parts = url.pathname.split('/')
	const lang = parts.find(part => part in languages)
	return lang ? (lang as keyof typeof ui) : defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}

export function getRelativeLocaleUrl(lang: keyof typeof languages) {
	return `/lease_comparison/${lang}/`
}
