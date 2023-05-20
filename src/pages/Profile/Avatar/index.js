import React from "react";
import userPhoto from "../../../assets/fon_avatars.png"
import "./styles.scss";

const Avatar = (props) => {
    return (
        <>
            <div className="wrapper_avatars_and_menu_profiles">
                <div className="shahta_avatars">
                    <div className="podium_avatars">
                        <div className="fon_avatars_user_profile">
                            <div className="wrapAvatar">
                                <img className="avatar" src={
                                    props.avatar != null ? props.avatar : userPhoto
                                    } alt={props.avatar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avatar;