import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogsPage from './components/BlogsPage'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sponsors from './components/Sponsors'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Alumni from './components/Alumni'
import { BlogProvider } from './context/blog-context'
import CrewMembers from './components/CrewMembers'
import Cars from './components/Cars'




const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'sponsors', element: <Sponsors /> },
      { path: 'alumni', element: <Alumni /> },
      { path: 'team', element: <CrewMembers /> },
      { path: 'cars', element: <Cars /> },
      { path: 'blogs', element: <BlogsPage /> },
      { path: 'blogs/:blogid', element: <Blog /> },
      { path: '*', element: <NotFound /> }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App


