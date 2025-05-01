import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import DetailsPages from './pages/details'
import OneDetailsPages from './pages/details/index1'
import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<Outlet />
		</>
	)
}

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='details' element={<DetailsPages />} />
				<Route path='onedetails' element={<OneDetailsPages />} />
			</Route>
		</Routes>
	)
}

export default App
