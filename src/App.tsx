import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Doubt from "./pages/Doubt";
import Appointment from "./pages/Appointment";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/doubt" element={<Doubt />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/support" element={<Support />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
