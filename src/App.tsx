import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppLayout } from './components/layout/AppLayout/AppLayout';
import Dashboard from './pages/Dashboard';
import PatientList from './pages/PatientList';
import PatientDetail from './pages/PatientDetail';
import Settings from './pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={ <Navigate to="/dashboard" replace /> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/patients' element={ <PatientList/> } />
          <Route path='/settings' element={ <Settings/> } />
          <Route path='/patients/:id' element={ <PatientDetail/> } />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
