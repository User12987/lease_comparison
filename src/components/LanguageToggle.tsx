// src/components/LanguageToggle.tsx

import React from 'react'
import { languages } from '../i18n/ui'
import {
	getLangFromUrl,
	getRelativeLocaleUrl,
	useTranslations,
} from '../i18n/utils'

const LanguageToggle: React.FC = () => {
	const currentUrl = new URL(window.location.href)
	const currentLang = getLangFromUrl(currentUrl)
	const t = useTranslations(currentLang)

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLang = e.target.value as keyof typeof languages
		const newPath = getRelativeLocaleUrl(selectedLang)
		window.location.href = newPath
	}

	return (
		<div className='mb-4'>
			<label htmlFor='languageSelect' className='font-bold mr-2'>
				{t('language')}:
			</label>
			<select
				id='languageSelect'
				onChange={handleChange}
				value={currentLang}
				className='border p-1 rounded'
			>
				{Object.entries(languages).map(([lang, label]) => (
					<option key={lang} value={lang}>
						{label}
					</option>
				))}
			</select>
		</div>
	)
}

export default LanguageToggle
