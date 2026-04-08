import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />}  />
      </Routes>
    </>
  )
}

export default App