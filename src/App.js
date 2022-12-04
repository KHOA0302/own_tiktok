import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout

            if (route.layout === null) {
              Layout = Fragment
            } else if (route.layout) {
              Layout = route.layout
            }

            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  {route.element}
                </Layout>}
              />
            )
          })  
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
