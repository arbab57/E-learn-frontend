import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Mainlayout from './layouts/mainlayout'
import MainPage from './pages/mainPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </>
    )
  )

  return (

    <RouterProvider router={router} />

  )
}

export default App