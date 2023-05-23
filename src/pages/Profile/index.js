import React from "react";
import store from "store/reduxStore.js";
import routeMain from "./routes.js";
import LSidebar from "../../components/LSidebar";
import Avatar from "./Avatar/index.js";
import RSidebar from "../../components/RSidebar";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import Info from "./Info/index.js";
import MyPostsContainer from "./MyPosts/MyPostsContainer.js";
import Preloader from "components/Priloader";
import "./styles.scss";

const Profile = (props) => {
    return (
        <>
            {props.profile ? (
                <section className="wrapContent">
                    <LSidebar 
                        content={
                            <> 
                                <Avatar 
                                    key={props.profile.id}
                                    isOwner={props.isOwner}
                                    savePhoto={props.savePhoto}
                                    avatar={props.profile.photos.small} />
                                <div className="wrapWidgetFriendsProfile">
                                    <WidgetFriends friends={store.getState().profilePage.friends} />
                                </div>
                                <div className="wrapWidgetPeopleProfile">
                                    <WidgetPeople users={store.getState().profilePage.users}/>
                                </div>
                            </>
                        }
                    />
                    <div className="contentProfiles">
                        <Info   
                            key={props.profile.userId} 
                            isOwner={props.isOwner} 
                            status={props.status} 
                            updateStatus={props.updateStatus} 
                            profile={props.profile}
                            saveProfile={props.saveProfile}
                        />
                        <MyPostsContainer />
                    </div>
                    <RSidebar 
                        content={
                            <>
                                <WidgetYofamiliar users={store.getState().profilePage.users}/>
                            </>
                        }
                    />
                </section>
                ) : <Preloader className="preloader"/>
            }
        </>
    )
}
export {routeMain};
export default Profile;