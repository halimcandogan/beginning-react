import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Contact from "./Contact";
import Enıyırenkcıftlerı from "./Enıyırenkcıftlerı";
import Ourservices from "./Ourservices"
import Tasarım from "./Tasarım";
import Yazılımnedır from "./Yazılımnedır";




function Browserout(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/aboutus"  element={<Aboutus />} />
                    <Route path="/ourservices" element={<Ourservices />} />
                    <Route path="/blog"  element={<Blog />} />
                    <Route path="/contact"  element={<Contact />} />
                    <Route path="/enıyırenkcıftlerı" element={<Enıyırenkcıftlerı />} />
                    <Route path="/tasarım" element={<Tasarım />} />
                    <Route path="/yazılımnedir" element={<Yazılımnedır />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Browserout;