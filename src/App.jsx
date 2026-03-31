import { MainLayout } from "@components/layout/MainLayout/MainLayout.jsx";
import { HomePage } from "./pages/HomePage.jsx";

export default function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}
