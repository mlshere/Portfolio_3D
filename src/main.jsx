import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import Blog from './components/Blog.jsx'
import './index.css'

export const createRoot = ViteReactSSG({
  routes: [
    { path: '/', element: <App /> },
    { path: '/blog/', element: <Blog /> },
    { path: '*', element: <App /> },
  ],
})
