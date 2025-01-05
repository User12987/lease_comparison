// src/components/ComparisonTable.tsx

import React, { type JSX } from 'react'
import { useTranslations } from '../i18n/utils'

interface ComparisonTableProps {
	shortMonthly: number
	yearlyMonthly: number
	deposit: number
	lang: 'en' | 'th'
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
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

	const rows = []
	for (let month = 1; month <= 12; month++) {
		const yearlyRent = yearlyMonthly * month
		const yearlyDeposit = isDepositReturned('yearly', month) ? 0 : deposit
		const yearlyTotal = yearlyRent + yearlyDeposit

		const shortRent = shortMonthly * month
		const shortDeposit = isDepositReturned('short', month) ? 0 : deposit
		const shortTotal = shortRent + shortDeposit

		let comparison: JSX.Element
		if (yearlyTotal < shortTotal) {
			const difference = shortTotal - yearlyTotal
			comparison = (
				<span className='text-green-600 font-bold'>
					{t('yearlyBetter')} {formatNumber(difference)} ฿
				</span>
			)
		} else if (yearlyTotal > shortTotal) {
			const difference = yearlyTotal - shortTotal
			comparison = (
				<span className='text-red-600 font-bold'>
					{t('shortBetter')} {formatNumber(difference)} ฿
				</span>
			)
		} else {
			comparison = (
				<span>
					{t('sameCost')} ({formatNumber(yearlyTotal)} ฿)
				</span>
			)
		}

		rows.push(
			<tr key={month}>
				<td className='border px-4 py-2'>{month}</td>
				<td className='border px-4 py-2'>
					{formatNumber(yearlyRent)} +{' '}
					{yearlyDeposit > 0
						? `${formatNumber(yearlyDeposit)} ฿ ${t('depositLost')}`
						: `฿0 ${t('depositReturned')}`}{' '}
					= <strong>{formatNumber(yearlyTotal)} ฿</strong>
				</td>
				<td className='border px-4 py-2'>
					{formatNumber(shortRent)} +{' '}
					{shortDeposit > 0
						? `${formatNumber(shortDeposit)} ฿ ${t('depositLost')}`
						: `฿0 ${t('depositReturned')}`}{' '}
					= <strong>{formatNumber(shortTotal)} ฿</strong>
				</td>
				<td className='border px-4 py-2'>{comparison}</td>
			</tr>,
		)
	}

	return (
		<div className='overflow-x-auto mt-6'>
			<table className='min-w-full table-auto'>
				<thead>
					<tr className='bg-gray-200'>
						<th className='p-2'>{t('table.month')}</th>
						<th className='p-2'>{t('table.shortTerm')}</th>
						<th className='p-2'>{t('table.yearlyTerm')}</th>
						<th className='p-2'>{t('table.difference')}</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

export default ComparisonTable
