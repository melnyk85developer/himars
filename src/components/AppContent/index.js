import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../../pages/Home/index";
import Profile from "../../pages/profile";
import Header from "../Header/Header";
import LeftNaw from "../LeftNav";
import "./styles.scss";

const AppContent = (props) => {
    return (
        <div className="AppContent">
            <section>
                <Header />
                    <div className="wrapper_content">
                        <div className="wrapper_nav"><div className="top_menu"></div></div>
                        <div className="wrapper">
                            <div className='content'>
                                <LeftNaw />
                            </div>
                        </div>
                    </div>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route to={{
                        path: <Home/>
                    }}/>
                </Routes>
            </section>
        </div>
    )
}
export default AppContent;