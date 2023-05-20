import React from "react";
import "./styles.scss"

const Header = (props) => {
    return (
        <header>
            <div className="wrapper_logo_search">
                <div className="logo"><a href='/'><span className="hi">Hi</span><span className="mars">Mars</span></a></div>
                <div className="poisk">
                        <input className="search cursor" type="text" name="search"/>
                </div>
            </div>
            <div className="wrapper_b_sroka_header">
                <marquee className="stroka_header">.::: Тут могла быть твоя реклама ! :::.</marquee>	
            </div>
        </header>
    )
}
export default Header;