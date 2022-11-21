import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboardPage/dashboardPage';
import LoginPage from '../pages/LoginPage';
import { RegistrationPage } from '../pages/registrationPage/registrationPage';
import { DiagramTab } from './diagramTab/diagramTab';
import { HomeTab } from './homeTab/homeTab';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from '../redux/auth';
import PublicOutlet from '../components/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="login" element={<PublicOutlet restricted />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="homeTab" element={<HomeTab />} />
          <Route path="diagramTab" element={<DiagramTab />} />
          <Route path="*" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
export default App;
