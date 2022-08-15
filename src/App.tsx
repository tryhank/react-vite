import { Routes, Route } from 'react-router-dom'
import HelloWorld from './views/HelloWorld'
import Login from './views/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
