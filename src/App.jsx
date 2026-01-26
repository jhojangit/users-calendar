import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import FormPage from './pages/FormPage';
import FormPageUpdate from './pages/FormPageUpdate';
import AllUsersPage from './pages/AllUsersPage';
import ListPrintPage from './pages/ListPrintPage';
import Welcome from './components/Welcome';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      
      <Route path="/main" element={
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      } />
      
      <Route path="main/users/:id" element={
        <ProtectedRoute>
          <UsersPage />
        </ProtectedRoute>
      } />
      
      <Route path="/form" element={
        <ProtectedRoute>
          <FormPage />
        </ProtectedRoute>
      } />
      
      <Route path="/formPageUpdate/:id" element={
        <ProtectedRoute>
          <FormPageUpdate />
        </ProtectedRoute>
      } />
      
      <Route path="/allUsers" element={
        <ProtectedRoute>
          <AllUsersPage />
        </ProtectedRoute>
      } />
      
      <Route path="/listPrintPage" element={
        <ProtectedRoute>
          <ListPrintPage />
        </ProtectedRoute>
      } />

      
    </Routes>
  );
}

export default App;
