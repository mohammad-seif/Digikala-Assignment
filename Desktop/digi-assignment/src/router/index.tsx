import { Routes, Route } from 'react-router-dom'

import routes from './routes'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element, layout: Layout }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <Element />
            </Layout>
          }
        />
      ))}
    </Routes>
  )
}

export default AppRouter
