import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../../pages/Home";
import Header from "../Header/Header";
const AppContent = (props) => {
    return (
        <div className="AppContent">
            <section>
                <Header />
                    Hello GitLab
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </section>
        </div>
    )
}
export default AppContent;