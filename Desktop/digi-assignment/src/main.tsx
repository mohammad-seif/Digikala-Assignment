import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import App from '@/App.tsx'
import AppRouter from '@/router/index.tsx'
import { queryClient } from '@/libs/react-query.ts'

import '@/assets/styles/_reset.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App>
          <AppRouter />
        </App>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
