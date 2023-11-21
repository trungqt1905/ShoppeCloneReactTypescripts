import { ToastContainer } from 'react-toastify'
import UseRouteElement from './useRouteElement'

function App() {
  const routeElement = UseRouteElement()
  return (
    <>
      {routeElement}
      <ToastContainer />
    </>
  )
}

export default App
