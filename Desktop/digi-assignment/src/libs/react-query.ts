import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      cacheTime: 1000 * 5,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 1000 * 5
    },
    mutations: {
      retry: false
    }
  }
})
