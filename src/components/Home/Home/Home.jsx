import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import Breadcrumb from '../TapLink'

function Home() {
	const carCatigoriy = [
		{
			id: 1,
			name: 'CHEVROLET',
			images: 'CHEVROLEt.png',
		},
		{
			id: 2,
			name: 'Lada',
			images: 'lada.png',
		},
		{
			id: 3,
			name: 'lamborghini',
			images: 'lamborghini.png',
		},
		{
			id: 4,
			name: 'ferrari',
			images: 'ferrari.png',
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
				<div className='w-full mt-[5px] flex items-center max-[500px]:justify-center gap-[9px]'>
					<Breadcrumb/>
				</div>
				<div className='w-full pt-[24px]'>
					<h1 className='text-[46px] mb-[48px] max-[500px]:text-center font-semibold font-["Noto Sans"] text-[rgba(0,0,0,1)]'>
						Modellari
					</h1>
					<div className='w-full grid grid-cols-4 gap-[32px] max-[600px]:gap-[10px] max-[950px]:grid-cols-3 max-[700px]:grid-cols-2 max-[490px]:grid-cols-1'>
						{carCatigoriy?.map(car => (
							<Link to={`/details`} state={{ name: car.name }} key={car.id}>
								<div className='group max-w-[289px] max-[700px]:max-w-full cursor-pointer'>
									<img
										className='w-full bg-contain'
										src={car?.images}
										alt={`${car?.name} car`}
									/>
									<h2 className='text-[24px] uppercase font-medium font-["Noto Sans"] text-center text-[rgba(0,0,0,1)]'>
										{car?.name}
									</h2>
									<div className='w-0 transition-all group-hover:w-full h-[1px] bg-[#00B894]'></div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

		</>
	)
}

export default Home
