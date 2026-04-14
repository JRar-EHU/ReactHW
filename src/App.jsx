import { MainLayout } from "@components/layout/MainLayout/MainLayout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MenuPage } from "./pages/MenuPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
    <>
      <CartProvider>
        <MainLayout>
          <MenuPage />
        </MainLayout>
      </CartProvider>
    </>
  );
}
