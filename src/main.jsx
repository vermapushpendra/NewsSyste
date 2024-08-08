import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'

import './index.css';
import History from './components/History.jsx'
import Subscription from './components/Subscription.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'History',
                element: <History />,
            },
            {
                path: 'Subscription',
                element: <Subscription />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
