import { Link } from 'react-router-dom'
import Breadcrumb from '../../Home/TapLink'
import { AiOutlineUser } from 'react-icons/ai'

function OneDetails() {
	const car = [
		{
			name: 'Chevrolet Malibu',
			marka: "CHEVROLET",
			price: '329 900 000',
			tanirovkasi: "Yo'q",
			motor: '2.4',
			year: '2024',
			color: 'Oq',
			distance: '3000',
			gearbook: 'Avtomat karobka',
			body: 'Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan.',
		},
	]

	return (
		<>
			<section className='max-w-[1250px] m-auto max-[1300px]:mx-[20px] pb-[50px]'>
				<div className=''>
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
						Modellari
					</h1>

					<div className=''>
						{car?.map(car => (
							<div className='bg-[rgba(246,246,246,1)] py-[16px] px-[24px] max-w-[396px] rounded-[8px]'>
								<h2 className='text-[rgba(0,0,0,1)] leading-[32px] font-medium font-["Noto sans"] text-[24px] uppercase'>
									{car?.name}
								</h2>
								<p className='text-[rgba(0,0,0,1)] leading-[32px] font-normal font-["Noto sans"] text-[16px]'>
									<span>{car?.price}</span> so‘m dan
								</p>
								<img className='my-[16px]' src='malibu.png' alt='car images' />
								<div className=''>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
											Marka:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.marka}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
										Tanirovkasi:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.tanirovkasi}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
											Motor:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.motor}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
											Year:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.year}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
											Color:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.color}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
										Distance:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.distance}
										</p>
									</div>
									<div className="flex items-center gap-[4px] mb-[4px] h-[32px]">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold leading-[32px]'>
										Gearbook:
										</p>{' '}
										<p className='font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[32px]'>
											{car?.gearbook}
										</p>
									</div>
									<div className="">
										<p className='font-["Noto sans"] text-[rgba(0,0,0,1)] text-[16px] font-semibold'>
											Deskreption:
										<span className='ml-[4px] font-["Noto sans"] text-[rgba(0,0,0,0.6)] text-[16px] font-normal leading-[24px]'>
											{car?.body}
										</span>
										</p>{' '}
									</div>
									<hr className='text-[rgba(0,0,0,0.2)] my-[4px]'/>
									<div className="flex items-center justify-end">
										 <div><span className='text-[rgba(0,0,0,1)] text-[16px] font-semibold font-["Noto sans"] leading-[32px]'>Umumiy xarajat: </span><span className='text-[rgba(0,0,0,0.6)] text-[16px] font-normal font-["Noto sans"] leading-[24px]'>329 900 000 so'm</span></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default OneDetails
