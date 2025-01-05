// src/components/CostChart.tsx

import React from 'react'
import { useTranslation } from 'react-i18next'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import { useTranslations } from '../i18n/utils'

interface CostChartProps {
	shortMonthly: number
	yearlyMonthly: number
	deposit: number
	lang: 'en' | 'th'
}

const CostChart: React.FC<CostChartProps> = ({
	shortMonthly,
	yearlyMonthly,
	deposit,
	lang,
}) => {
	const t = useTranslations(lang)

	const formatNumber = (num: number): string => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}

	const isDepositReturned = (
		contractType: 'yearly' | 'short',
		month: number,
	): boolean => {
		if (contractType === 'yearly') {
			return month === 12
		} else if (contractType === 'short') {
			return month % 3 === 0
		}
		return false
	}

	const data = []
	for (let month = 1; month <= 12; month++) {
		const yearlyRent = yearlyMonthly * month
		const yearlyDeposit = isDepositReturned('yearly', month) ? 0 : deposit
		const yearlyTotal = yearlyRent + yearlyDeposit

		const shortRent = shortMonthly * month
		const shortDeposit = isDepositReturned('short', month) ? 0 : deposit
		const shortTotal = shortRent + shortDeposit

		data.push({
			month: month,
			yearly: yearlyTotal,
			shortTerm: shortTotal,
		})
	}

	return (
		<div className='mt-8'>
			<h2 className='text-2xl font-bold mb-4 text-center'>
				{t('chart.costs')}
			</h2>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				>
					<XAxis
						dataKey='month'
						label={{
							value: t('month'),
							position: 'insideBottom',
							offset: -5,
						}}
					/>
					<YAxis />
					<Tooltip
						formatter={(value: number) =>
							`${formatNumber(value)} ฿`
						}
					/>
					<Legend />
					<Line
						type='monotone'
						dataKey='yearly'
						stroke='#4CAF50'
						name={t('chart.yearlyTerm')}
					/>
					<Line
						type='monotone'
						dataKey='shortTerm'
						stroke='#f44336'
						name={t('chart.shortTerm')}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default CostChart
