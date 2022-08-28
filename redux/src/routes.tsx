import { Route, Navigate, Routes } from "react-router-dom";
import DashboardPage from "modules/dashboard";

const routes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default routes;
