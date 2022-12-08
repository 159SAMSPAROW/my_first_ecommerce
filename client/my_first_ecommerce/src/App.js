import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const Layout = () =>{
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
