import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainPage from './pages/mainPage'
import Mainlayout from './layouts/mainlayout'
import Login from './pages/Login'// In your index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import SavedCourses from './pages/SavedCourses';
import SavedPage from './pages/SavedPage';
import SavedCoursesLayout from './layouts/SavedCoursesLayout';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<MainPage />} />
        </Route>
        {/* <Route path="/saved-curses" element={<SavedCoursesLayout />}>
          <Route index element={<SavedPage />} />
        </Route> */}
      </>
    )
  )

  return (

    <RouterProvider router={router} />


  )
}

export default App