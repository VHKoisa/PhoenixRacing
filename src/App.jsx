import React, { useState } from 'react'
import './App.css'
import Blog from './components/Blog'
import BlogsPage from './components/BlogsPage'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sponsors from './components/Sponsors'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import { BlogProvider } from './context/blog-context'
import Team from './components/Team'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: 'home', element: <div>Home</div> },
      { path: 'sponsors', element: <Sponsors /> },
      { path: 'team', element: <Team /> },
      {
        path: 'blogs', element: <BlogsPage />
      },
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
