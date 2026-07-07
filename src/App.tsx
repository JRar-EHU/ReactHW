import { MainLayout } from "@components/layout/MainLayout/MainLayout";
import { HomePage } from "@pages/homePage/HomePage";
import { MenuPage } from "@pages/menuPage/MenuPage";
import { ErrorBoundary } from "@components/UI/errorBoundary/ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "@pages/notFoundPage/NotFoundPage";
import { MenuDetailPage } from "@pages/menuDetailPage/MenuDetailPage";
import { LoginPage } from "@pages/loginPage/LoginPage";
import { OrderPage } from "@pages/orderPage/OrderPage";
import { RequireAuth } from "@components/features/requireAuth/RequireAuth";
import { ThemeProvider } from "@context/ThemeContext";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
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
      </ThemeProvider>
    </ErrorBoundary>
  );
}
