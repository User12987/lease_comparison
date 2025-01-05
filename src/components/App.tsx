// src/components/App.tsx

import React, { useState } from 'react'
import InputFields from './InputFields'
import ComparisonTable from './ComparisonTable'
import CostChart from './CostChart'
import { getLangFromUrl, useTranslations } from '../i18n/utils'

const App: React.FC = () => {
	const currentUrl = new URL(window.location.href)
	const lang = getLangFromUrl(currentUrl)
	const t = useTranslations(lang)

	const [shortContractCost, setShortContractCost] = useState<number | string>(
		27000,
	)
	const [yearlyContractCost, setYearlyContractCost] = useState<
		number | string
	>(24000)
	const [deposit, setDeposit] = useState<number | string>(26000)

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold text-center mb-6'>
				{t('title')}
			</h1>
			<InputFields
				shortContractCost={shortContractCost}
				setShortContractCost={setShortContractCost}
				yearlyContractCost={yearlyContractCost}
				setYearlyContractCost={setYearlyContractCost}
				deposit={deposit}
				setDeposit={setDeposit}
			/>
			<ComparisonTable
				shortMonthly={
					typeof shortContractCost === 'string'
						? parseFloat(shortContractCost)
						: shortContractCost
				}
				yearlyMonthly={
					typeof yearlyContractCost === 'string'
						? parseFloat(yearlyContractCost)
						: yearlyContractCost
				}
				deposit={
					typeof deposit === 'string' ? parseFloat(deposit) : deposit
				}
				lang={lang}
			/>
			<CostChart
				shortMonthly={
					typeof shortContractCost === 'string'
						? parseFloat(shortContractCost)
						: shortContractCost
				}
				yearlyMonthly={
					typeof yearlyContractCost === 'string'
						? parseFloat(yearlyContractCost)
						: yearlyContractCost
				}
				deposit={
					typeof deposit === 'string' ? parseFloat(deposit) : deposit
				}
				lang={lang}
			/>
		</div>
	)
}

export default App
