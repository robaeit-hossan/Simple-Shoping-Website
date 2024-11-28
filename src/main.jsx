import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider, } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient} >
    <RouterProvider router={router}/>
  </QueryClientProvider>
)
