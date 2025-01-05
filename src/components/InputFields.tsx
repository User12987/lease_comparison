// src/components/InputFields.tsx

import React from 'react'
import { getLangFromUrl, useTranslations } from '../i18n/utils'

interface InputFieldsProps {
	shortContractCost: number | string
	setShortContractCost: (value: number | string) => void
	yearlyContractCost: number | string
	setYearlyContractCost: (value: number | string) => void
	deposit: number | string
	setDeposit: (value: number | string) => void
}

const InputFields: React.FC<InputFieldsProps> = ({
	shortContractCost,
	setShortContractCost,
	yearlyContractCost,
	setYearlyContractCost,
	deposit,
	setDeposit,
}) => {
	const lang = getLangFromUrl(new URL(window.location.href))
	const t = useTranslations(lang)

	const handleChange =
		(setter: (value: number | string) => void) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setter(e.target.value)
		}

	return (
		<div className='flex flex-wrap gap-6'>
			<div className='flex flex-col'>
				<label htmlFor='shortContractCost' className='font-bold mb-1'>
					{t('form.threeMonthCost')}
				</label>
				<input
					type='number'
					id='shortContractCost'
					value={shortContractCost}
					onChange={handleChange(setShortContractCost)}
					className='border p-2 rounded w-40'
					min='0'
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='yearlyContractCost' className='font-bold mb-1'>
					{t('form.yearlyCost')}
				</label>
				<input
					type='number'
					id='yearlyContractCost'
					value={yearlyContractCost}
					onChange={handleChange(setYearlyContractCost)}
					className='border p-2 rounded w-40'
					min='0'
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='depositAmount' className='font-bold mb-1'>
					{t('form.deposit')}
				</label>
				<input
					type='number'
					id='depositAmount'
					value={deposit}
					onChange={handleChange(setDeposit)}
					className='border p-2 rounded w-40'
					min='0'
				/>
			</div>
		</div>
	)
}

export default InputFields
