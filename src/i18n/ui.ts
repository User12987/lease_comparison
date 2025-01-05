// src/i18n/ui.ts

export const languages = {
	en: 'English',
	th: 'ไทย',
} as const

export const defaultLang = 'en'

export const showDefaultLang = false

export const ui = {
	en: {
		title: 'Lease Contract Comparison',
		shortTerm: 'Short-term rent',
		yearTerm: 'Yearly rent',
		deposit: 'Deposit',
		calculate: 'Calculate',
		reset: 'Reset',
		'nav.home': 'Home',
		'nav.about': 'About',
		'form.threeMonthCost': 'Three Month Cost',
		'form.yearlyCost': 'Yearly Cost',
		'form.deposit': 'Deposit',
		language: 'Language',
		'table.month': 'Month',
		'table.shortTerm': 'Short-term Contract',
		'table.yearlyTerm': 'Yearly Contract',
		'table.difference': 'Difference',
		'chart.costs': 'Cost Comparison Over Time',
		'chart.shortTerm': 'Short-term Contract',
		'chart.yearlyTerm': 'Yearly Contract',
		yearlyBetter: 'Yearly contract is better',
		shortBetter: 'Short-term contract is better',
		sameCost: 'Same cost',
		depositLost: 'deposit lost',
		depositReturned: 'deposit not lost',
		month: 'Month',
	},
	th: {
		title: 'เปรียบเทียบสัญญาเช่า',
		shortTerm: 'ค่าเช่าระยะสั้น',
		yearTerm: 'ค่าเช่ารายปี',
		deposit: 'เงินมัดจำ',
		calculate: 'คำนวณ',
		reset: 'รีเซ็ต',
		'nav.home': 'หน้าแรก',
		'nav.about': 'เกี่ยวกับ',
		'form.threeMonthCost': 'ค่าเช่า 3 เดือน',
		'form.yearlyCost': 'ค่าเช่ารายปี',
		'form.deposit': 'เงินมัดจำ',
		language: 'ภาษา',
		'table.month': 'เดือน',
		'table.shortTerm': 'สัญญาระยะสั้น',
		'table.yearlyTerm': 'สัญญารายปี',
		'table.difference': 'ส่วนต่าง',
		'chart.costs': 'เปรียบเทียบค่าใช้จ่ายตามระยะเวลา',
		'chart.shortTerm': 'สัญญาระยะสั้น',
		'chart.yearlyTerm': 'สัญญารายปี',
		yearlyBetter: 'สัญญารายปีดีกว่า',
		shortBetter: 'สัญญาระยะสั้นดีกว่า',
		sameCost: 'ค่าใช้จ่ายเท่ากัน',
		depositLost: 'เงินมัดจำหาย',
		depositReturned: 'เงินมัดจำไม่หาย',
		month: 'เดือน',
	},
} as const
