import { Link, useLocation } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'

const Breadcrumb = () => {
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter(x => x)

	// "details" sahifasida turganimizni tekshiramiz
	const isDetailsPage = pathnames[pathnames.length - 1]?.toLowerCase() === 'details'
	const modelName = isDetailsPage ? location.state?.name : null

	return (
		<div className='flex items-center gap-[9px] text-sm text-gray-600 font-[Noto Sans] my-[10px] max-[500px]:my-[15px]'>
			<div className='group'>
				<Link
					to='/'
					className='text-[12px] font-normal font-["Noto Sans"] leading-[24px] uppercase'
				>
					Bosh sahifa
				</Link>
				<div className='w-0 group-hover:w-full transition-all h-[1px] bg-[#00B894]'></div>
			</div>

			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
				let formattedName = name.charAt(0).toUpperCase() + name.slice(1)

				if (index === pathnames.length - 1 && modelName) {
					formattedName = modelName
				}

				return (
					<span key={index} className='flex items-center gap-2'>
						<FaAngleRight className='text-[14px]' />
						<div className='group'>
							<Link
								to={routeTo}
								className='text-[12px] font-normal font-["Noto Sans"] leading-[24px] uppercase'
							>
								{formattedName}
							</Link>
							<div className='w-0 group-hover:w-full transition-all h-[1px] bg-[#00B894]'></div>
						</div>
					</span>
				)
			})}
		</div>
	)
}

export default Breadcrumb
