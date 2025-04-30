import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import DetailsPages from './pages/details'
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
        <Route path=':id' element={<DetailsPages />} />
      </Route>
    </Routes>
  )
}

export default App
