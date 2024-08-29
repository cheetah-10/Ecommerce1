import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Categories from './components/Categories/Categories'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Notfound from './components/Notfound/Notfound'
import Brands from './components/Brands/Brands'
import Layout from './components/Layout/Layout'
import CounterContextProvider from './Context/counterContext'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Forget from './components/Forget/Forget'
import Reset from './components/Reset/Reset'
import NewPass from './components/NewPass/NewPass'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Payment from './components/Payment/Payment'
// import CategoriesProducts from './components/CategoriesProducts/CategoriesProducts'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query' 
function App() {

  const queryClient = new QueryClient()
  let xRouting = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'about', element: <ProtectedRoute><About /> </ProtectedRoute>},
        { path: 'categories', element:<ProtectedRoute><Categories /></ProtectedRoute>  },
        { path: 'productdetails/:id', element:<ProtectedRoute> <ProductDetails></ProductDetails> </ProtectedRoute>  },
        // { path: 'categoriesProducts/:id', element:<ProtectedRoute> <CategoriesProducts></CategoriesProducts> </ProtectedRoute>  },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register/> },
        { path: 'forget', element: <Forget /> },
        { path: 'reset', element: <Reset/> },
        { path: 'newPass', element: <NewPass/> },
        { path: 'cart', element:<ProtectedRoute><Cart /></ProtectedRoute>  },
        { path: 'payment', element:<ProtectedRoute><Payment /></ProtectedRoute>  },
        { path: 'brands', element:<ProtectedRoute> <Brands /></ProtectedRoute> },
        { path: 'products', element:<ProtectedRoute><Products /> </ProtectedRoute> },
        { path: '*', element: <Notfound /> }
      ]
    },
  ])
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <CounterContextProvider>
          <RouterProvider router={xRouting}></RouterProvider>
   
        </CounterContextProvider>
      </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
