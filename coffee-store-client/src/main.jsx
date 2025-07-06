//src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/coffees'),
        element: <Home />,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />,
      },
      {
        path: '/coffee-details/:id',
        element: <CoffeeDetails />,
      },
      {
        path: '/update-coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <UpdateCoffee />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
