import type { ComponentProps } from 'react';

export function GittoLogo(props: ComponentProps<'svg'>) {
	return (
		<svg
			width={512}
			height={512}
			viewBox='0 0 512 512'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<defs>
				<linearGradient
					id='a'
					x1={96}
					y1={96}
					x2={416}
					y2={416}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset={0} stopColor='#B7A5FF' />
					<stop offset={0.52} stopColor='#8B7CFF' />
					<stop offset={1} stopColor='#6D5DF6' />
				</linearGradient>
			</defs>
			<path
				d='M169 133l-67 67c-16 16-16 42 0 58l67 67M343 133l67 67c16 16 16 42 0 58l-67 67'
				stroke='url(#a)'
				strokeWidth={24}
				strokeLinecap='square'
				strokeLinejoin='round'
			/>
			<path
				d='M235 133v217'
				stroke='url(#a)'
				strokeWidth={20}
				strokeLinecap='round'
			/>
			<path
				d='M235 266v50c0 13 10 23 23 23h28c15 0 27-12 27-27v-22'
				stroke='url(#a)'
				strokeWidth={20}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle cx={235} cy={108} r={27} stroke='url(#a)' strokeWidth={18} />
			<circle cx={235} cy={238} r={27} stroke='url(#a)' strokeWidth={18} />
			<circle cx={313} cy={263} r={27} stroke='url(#a)' strokeWidth={18} />
			<circle cx={235} cy={377} r={27} stroke='url(#a)' strokeWidth={18} />
		</svg>
	);
}
