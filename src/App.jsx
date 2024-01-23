import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";

import Contact from "./components/contact/Contact";

import Home from "./components/home/Home";
import Dummydata from "./Dumydata";
import Dynamic from "./components/dynamicPage/Dynamic";
import Dashboardpage from "./components/dashboard/Dashboardpage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Dummydata>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseHome />} />
            <Route path="/team" element={<Team />} />
            <Route path="/details/:id" element={<Dynamic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboardpage />} />
          </Routes>
        </Dummydata>
      </BrowserRouter>
    </>
  );
}

export default App;
