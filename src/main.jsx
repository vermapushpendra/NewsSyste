import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import NewsCard from './components/NewsCard.jsx'
import Dashboard from './components/Dashboard.jsx'
import NewsReport from './components/NewsReports.jsx'
import PayoutCalculator from './components/PayoutCalculator.jsx'




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<NewsCard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='newsreport' element={<NewsReport />} />
            <Route path='payoutcalculator' element={<PayoutCalculator />} />


        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)


