import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import { ClerkProvider } from '@clerk/clerk-react';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/home",
        element: <Homepage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/single-post",
        element: <SinglePost />
      },
      {
        path: "/create-post",
        element: <CreatePost />
      },
      {
        path: "/posts",
        element: <Posts />
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
