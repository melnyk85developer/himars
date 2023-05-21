import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import { withSuspense } from '../../hoc/withSuspense';
import Authorization, { routeMain as routeAuthorization } from 'pages/Authorization/authorization';
import ProfileContainer, { routeMain as routeProfile }  from '../../pages/Profile/ProfileContainer';
import Dialog, { routeMain as routeDialog } from '../../pages/Dialog';
import UsersContainer, { routeMain as routeUsers } from 'pages/Users/usersContainer';
import MessagesContainer , { routeMain as routeMessages }  from '../../pages/Messages/MessagesContainer';
import Music, { routeMain as routeMusic } from '../../pages/Music';
import Shops, { routeMain as routeShops } from '../../pages/Shops';
import FriendsContainer, { routeMain as routeFriends } from '../../pages/Friends/FriendsContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav';
import Preloader from 'components/Priloader';
import { routeMain as routeVideo } from '../../pages/Video';
import Home, { routeMain as routeHome } from '../../pages/Home';
import Contacts, { routeMain as routeContacts } from '../../pages/Contacts';
import News, { routeMain as routeNews } from '../../pages/News';
import './styles.scss';

const Video = React.lazy(() => import('../../pages/Video'))

class AppContent extends React.Component {
    componentDidMount(){
        this.props.initializeAppContent()
    }
    render(){
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <div className="AppContent">
                <HeaderContainer />
                <div className="wrapper_content">
                    <div className="wrapper_nav"><div className="top_menu"></div></div>
                    <div className="wrapper">
                        <div className='content'>
                            <LeftNav />
                            <div className="wrapSection">
                                <section className='section_1'>
                                    <Routes>
                                        <Route path={routeAuthorization()} element={<Authorization />}/>
                                        <Route path={routeProfile()} element={<ProfileContainer />}/>
                                        <Route path={routeDialog()} element={<Dialog />}/>
                                        <Route path={routeUsers()} element={<UsersContainer />}/>
                                        <Route path={routeMessages()} element={<MessagesContainer /> }/>
                                        <Route path={routeFriends()} element={<FriendsContainer />}/>
                                        <Route path={routeMusic()} element={<Music/>}/>
                                        <Route path={routeShops()} element={<Shops/>}/>
                                        {/* <Route path={routeShops()} element={withSuspense(Shops)}/> */}
                                        {/* <Route path={routeVideo()} element={<Video/>}/> */}
                                        <Route path={routeVideo()} element={
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <Video/>
                                                </Suspense>
                                        }/> 
                                        <Route path={routeHome()} element={<Home/>}/>
                                        <Route path={routeNews()} element={<News/>}/>
                                        <Route path={routeContacts()} element={<Contacts/>}/>
                                        <Route to={{
                                            path: <Home/>
                                        }}/>
                                    </Routes>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AppContent;
