import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
