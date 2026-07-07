import { MainLayout } from "@components/layout/MainLayout/MainLayout.js";
import { HomePage } from "./pages/homePage/HomePage.js";
import { MenuPage } from "./pages/menuPage/MenuPage.js";
import { ErrorBoundary } from "@components/UI/errorBoundary/ErrorBoundary.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage.js";
import { MenuDetailPage } from "./pages/menuDetailPage/MenuDetailPage.js";
import { LoginPage } from "./pages/loginPage/LoginPage.js";
import { OrderPage } from "./pages/orderPage/OrderPage.js";
import { RequireAuth } from "@components/features/requireAuth/RequireAuth.js";
import { ThemeProvider } from "@context/ThemeContext.js";

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
