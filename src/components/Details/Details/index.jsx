import { Link } from 'react-router-dom'
import Breadcrumb from '../../Home/TapLink'
import { AiOutlineUser } from 'react-icons/ai'

function Details() {
	const chevroletCars = [
		{
			id: 1,
			name: 'Chevrolet Malibu',
			price: '$24,000',
			img: 'CHEVROLEt.png',
		},
		{
			id: 2,
			name: 'Chevrolet Spark',
			price: '$15,500',
			img: 'CHEVROLEt.png',
		},
		{
			id: 3,
			name: 'Chevrolet Cobalt',
			price: '$17,800',
			img: 'CHEVROLEt.png',
		},
		{
			id: 4,
			name: 'Chevrolet Lacetti',
			price: '$13,900',
			img: 'CHEVROLEt.png',
		},
		{
			id: 5,
			name: 'Chevrolet Equinox',
			price: '$26,600',
			img: 'CHEVROLEt.png',
		},
		{
			id: 6,
			name: 'Chevrolet Trailblazer',
			price: '$28,000',
			img: 'CHEVROLEt.png',
		},
		{
			id: 7,
			name: 'Chevrolet Captiva',
			price: '$21,300',
			img: 'CHEVROLEt.png',
		},
		{
			id: 8,
			name: 'Chevrolet Aveo',
			price: '$14,200',
			img: 'CHEVROLEt.png',
		},
		{
			id: 9,
			name: 'Chevrolet Orlando',
			price: '$23,100',
			img: 'CHEVROLEt.png',
		},
		{
			id: 10,
			name: 'Chevrolet Tahoe',
			price: '$54,000',
			img: 'CHEVROLEt.png',
		},
	]

	return (
		<>
			<section className='max-w-[1250px] m-auto max-[1300px]:mx-[20px] pb-[50px]'>
				<div className='w-full pt-[40px]'>
					<Link>
						<div className='w-[192px] max-[500px]:w-full h-[48px] float-end flex items-center justify-center gap-[10px] bg-[rgba(42,133,255,1)] rounded-[12px] hover:bg-[#2a86ffda] transition-all'>
							<AiOutlineUser className='text-[25px] text-[rgba(252,252,252,1)]' />
							<p className='text-[15px] font-bold text-[rgba(252,252,252,1)] font-["Inter"]'>
								Admin o‘tish
							</p>
						</div>
					</Link>
				</div>
				<div className='w-full max-[500px]:mt-[20px] flex items-center max-[500px]:justify-center gap-[9px]'>
					<Breadcrumb />
				</div>

				<h1 className='text-[46px] max-[360px]:text-[35px] max-[500px]:text-center mb-[48px] font-semibold font-["Noto Sans"] text-[rgba(0,0,0,1)]'>
				Modellar turlari
				</h1>
				<div className="flex items-center justify-center w-full">
				<div className='grid grid-cols-4 w-full max-[1024px]:grid-cols-3 max-[490px]:grid-cols-1 max-[785px]:grid-cols-2 max-[812px]:gap-[20px] gap-[32px]'>
					{chevroletCars?.map(cars => (
						<div key={cars?.id} className='group cursor-pointer w-full'>
							<img className='w-full' src={cars?.img} alt='car img' />
							<h2 className='text-[20px] font-medium font-["Noto Sans"] uppercase leading-[32px] text-[rgba(0,0,0,1)] max-[785px]:text-center w-full'>{cars?.name}</h2>
							<p className='text-[20px] max-[785px]:text-center font-semibold font-["Noto Sans"] leading-[32px] text-[rgba(0,0,0,1)] max-[490px]:text-center w-full'>Narxi: <span className='text-[20px]  font-normal font-["Noto Sans"] leading-[32px] text-[rgba(0,0,0,1)]'>{cars?.price}</span></p>
							<div className='w-0 transition-all group-hover:w-full h-[1px] bg-[#00B894]'></div>
						</div>
					))}
				</div>
				</div>
			</section>
		</>
	)
}

export default Details
