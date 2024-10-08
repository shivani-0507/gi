import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Error from './components/Error'
import { jsxDEV } from 'react/jsx-dev-runtime'
import { jsx } from 'react/jsx-runtime'
const Grocery = lazy(() =>  import("./components/Grocery") )


const AppLayout = () => {
   return (
      <div>
         <Header />
         <Outlet />
      </div>)
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />
         },
         {
            path: "/about",
            element: <About />
         },
         {
            path: "/grocery",
            element: (<Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>)
         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />
         }
      ]

   }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)