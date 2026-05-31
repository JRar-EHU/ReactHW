import { MainLayout } from "@components/layout/MainLayout/MainLayout.jsx";
import { HomePage } from "./pages/homePage/HomePage.jsx";
import { MenuPage } from "./pages/menuPage/MenuPage.jsx";
import { ErrorBoundary } from "@components/UI/errorBoundary/ErrorBoundary.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage.jsx";
import { MenuDetailPage } from "./pages/menuDetailPage/MenuDetailPage.jsx";
import { LoginPage } from "./pages/loginPage/LoginPage.jsx";
import { OrderPage } from "./pages/orderPage/OrderPage.jsx";
import { RequireAuth } from "@components/features/requireAuth/RequireAuth.jsx";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<HomePage />} index />
            <Route path="menu" element={<MenuPage />} />
            <Route path="menu/:productName" element={<MenuDetailPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="orders"
              element={
                <RequireAuth>
                  <OrderPage />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
