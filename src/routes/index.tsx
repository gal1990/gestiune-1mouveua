import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login';
import DashboardLayout from '../containers/DashboardLayout';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';
import ControlPanel from '../pages/ControlPanel';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  const getDefaultRoute = () => {
    if (!isAuthenticated) return '/login';
    return '/dashboard';
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={getDefaultRoute()} replace />}
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="control-panel" element={<ControlPanel/>} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;