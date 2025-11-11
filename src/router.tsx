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
import AdminAreasView from "./views/admin/AdminAreasView";
import NotFoundView from "./views/error/NotFoundView";
import ProtectedRoutesMiddleware from "./middlewares/ProtectedRoutesMiddleware";
import VisitorMiddleware from "./middlewares/VisitorMiddleware";
import BossMiddleware from "./middlewares/BossMiddleware";
import AdminMiddleware from "./middlewares/AdminMiddleware";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} replace />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route element={<ProtectedRoutesMiddleware />}>
              <Route element={<VisitorMiddleware />}>
                <Route path="/user-home" element={<UserHomeView />} />
                <Route
                  path="/user-appointments"
                  element={<UserAppointmentsView />}
                />
              </Route>

              <Route element={<BossMiddleware />}>
                <Route path="/boss-home" element={<BossHomeView />} />
                <Route path="/boss-schedule" element={<BossScheduleView />} />
              </Route>

              <Route element={<AdminMiddleware />}>
                <Route path="/admin-home" element={<AdminHomeView />} />
                <Route path="/admin-areas" element={<AdminAreasView />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
