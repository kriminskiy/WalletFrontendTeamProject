import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboardPage/dashboardPage';
import { LoginPage } from '../pages/loginPage/loginPage';
import { RegistrationPage } from '../pages/registrationPage/registrationPage';
import { DiagramTab } from './diagramTab/diagramTab';
import { HomeTab } from './homeTab/homeTab';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="homeTab" element={<HomeTab />} />
          <Route path="diagramTab" element={<DiagramTab />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
