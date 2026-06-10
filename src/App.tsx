import { Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppLayout } from './components/layout/AppLayout/AppLayout';
import Dashboard from './pages/Dashboard';
import PatientList from './pages/PatientList';
import PatientDetail from './pages/PatientDetail';

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navigate to="/dashboard" replace /> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/patients' element={ <PatientList/> } />
          <Route path='/patients/:id' element={ <PatientDetail/> } />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
