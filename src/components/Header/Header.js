import React from 'react';
import "./styles.scss"
import { NavLink } from 'react-router-dom';
import { routeMain as routeAuthorization } from 'pages/Authorization/authorization';

const Header = (props) => {
    return (
        <>
            <header>
                <div className="wrapper_logo_search">
                    <div className="logo"><a href='/'><span className="hi">Hi</span><span className="mars">Mars</span></a></div>
                    {/* <h3>Social Associations !!!</h3> */}	
                    <div className="poisk">
                        <input className="search cursor" type="text" name="search"/>
                    </div>
                    <div className="loginBlock">
                        <div className="blockAuthorization">
                            { props.isAuth  ?   <div className="blockProfile">
                                                    <button onClick={props.logout}>Log out</button><p>{"-"}{props.login}</p>
                                                    <li className="header_li">
                                                        <img className="img" src="https://yt3.ggpht.com/yti/AHXOFjVDj9EAyg8cUy84_AmQnPq95l52jsSGpZV1PBo=s108-c-k-c0x00ffffff-no-rj" alt='avatar'/>
                                                    </li>
                                                </div>
                                            :  <NavLink to={routeAuthorization()}>Login</NavLink>
                            }
                        </div>                        
                    </div>
                </div>
            <div className="wrapper_b_sroka_header">
                <marquee className="stroka_header">.::: Тут могла быть твоя реклама ! :::.</marquee>	
            </div>
            </header>
        </>
    )
}

export default Header;