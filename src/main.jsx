import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Rotas
import App from './App'
// import { Home } from './Pages/Home'
import { LoginPage } from './Pages/Login'
import { RegisterPage } from './Pages/Register'
import { HomePage } from './Pages/Home/home';
// import FormExample from './Components/FormValidate';
// import NavScrollExample from './Components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
     
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
