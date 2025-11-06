import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginView from "./views/auth/LoginView";
import AuthLayout from "./layouts/auth/AuthLayout";
import RegisterView from "./views/auth/RegisterView";
import UserHomeView from "./views/user/UserHomeView";
import AppLayout from "./layouts/app/AppLayout";
import UserAppointmentsView from "./views/user/UserAppointmentsView";
import BossHomeView from "./views/boss/BossHomeView";
import BossScheduleView from "./views/boss/BossScheduleView";
import AdminHomeView from "./views/admin/AdminHomeView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/user-home" element={<UserHomeView />} />
          <Route path="/user-appointments" element={<UserAppointmentsView />} />
          <Route path="/boss-home" element={<BossHomeView />} />
          <Route path="/boss-schedule" element={<BossScheduleView />} />
          <Route path="/admin-home" element={<AdminHomeView />} />
        </Route>

        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}
