import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainPage from './pages/mainPage'
import Mainlayout from './layouts/mainlayout'
import Login from './components/Login'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<MainPage />} />
        </Route>
        {/* <Route path='/login' element={<Login />} /> */}
      </>
    )
  )

  return (

    <RouterProvider router={router} />


  )
}

export default App