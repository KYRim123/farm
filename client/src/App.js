import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LayoutDefault from './layouts/layoutDefault/LayoutDefault'
import routes from './routes'




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routes.map((route, index) => {
              let Layout = LayoutDefault
              let Page = route.page || Fragment
              route.layout ?  route.layout !== null  ? Layout = route.layout : Layout = LayoutDefault  : Layout = LayoutDefault
              return <Route
                key={index}
                path={route.path}
                element={<Layout><Page /></Layout>}
              ></Route>
            }
            )
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
