import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import UsersPage from './pages/UsersPage'
import FormPage from './pages/FormPage'

function App() {

  return (

    <>
      <Routes>
          <Route path="/" element={< MainPage/>} />
          <Route path="/users/:id" element={< UsersPage/>} />
          <Route path="/form" element={< FormPage/>} />
          <Route path="/form/:id" element={< FormPage/>} />
          <Route path="*" element={<h1>Page no found</h1>} />
      </Routes>
    </>

  )
}

export default App
