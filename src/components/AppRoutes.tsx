import About from "@/pages/About";
import Appointment from "@/pages/Appointment";
import Doubt from "@/pages/Doubt";
import Guide from "@/pages/Guide";
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Support from "@/pages/Support";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return ( 
        <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/doubt" element={<Doubt />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     );
}
 
export default AppRoutes;