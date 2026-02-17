import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



function App() {
  
const queryClient = new QueryClient()

  return (
    <div>

          <QueryClientProvider client={queryClient}>    


       <RouterProvider router={router} />,

</QueryClientProvider>


    </div>
  )
}

export default App
