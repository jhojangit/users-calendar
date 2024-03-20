import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import UsersPage from './pages/UsersPage'
import FormPage from './pages/FormPage'
import FormPageUpdate from './pages/FormPageUpdate'
import AllUsersPage from './pages/AllUsersPage'
import ListPrint from './components/ListPrint'
import ListPrintPage from './pages/ListPrintPage'

function App() {

  return (

    <>
      <Routes>
          <Route path="/" element={< MainPage/>} />
          <Route path="/users/:id" element={< UsersPage/>} />
          <Route path="/form" element={< FormPage/>} />
          <Route path="/formPageUpdate/:id" element={< FormPageUpdate/>} />
          <Route path="/allUsers" element={< AllUsersPage/>} />
          <Route path="/listPrintPage" element={< ListPrintPage/>} />
          <Route path="*" element={<h1>Page no found</h1>} />
      </Routes>
    </>

  )
}

export default App
