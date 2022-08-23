import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Track from "./components/pages/Track";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import Profile from "./components/pages/Profile";
import Choice from "./components/pages/Choice";
import SignupIn from "./components/pages/SignupIn";
import SignupOrg from "./components/pages/SignupOrg";
import ScrollToTop from "./components/hooks/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/about" element={<About />} />
            <Route path="/track" element={<Track />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Protected Routes */}
          <Route path="/choice" element={<Choice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signupin" element={<SignupIn />} />
          <Route path="/signuporg" element={<SignupOrg />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
