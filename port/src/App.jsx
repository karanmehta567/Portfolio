import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/notFound.jsx";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "./components/ui/toaster.jsx";

function App() {
  return (
    <>
      <Analytics />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
