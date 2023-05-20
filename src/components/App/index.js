import React from "react"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContent from "../AppContent"
import "./styles.scss";

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}
export default App;