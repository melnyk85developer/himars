import React, { ChangeEvent } from "react";
import userPhoto from "../../../assets/fon_avatars.png"
import "./styles.scss";

type PropsType = {
    isOwner: boolean;
    avatar: string | any
    savePhoto: (file: File) => void
}

const Avatar: React.FC<PropsType> = (props) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className="wrapper_avatars_and_menu_profiles">
            <div className="shahta_avatars">
                <div className="podium_avatars">
                    <div className="fon_avatars_user_profile">
                        <div className="wrapAvatar">
                            <img className="avatar" src={
                                props.avatar != null ? props.avatar : userPhoto
                                } alt={props.avatar}/>
                            { props.isOwner && <input className="inputUploadAvatar" onChange={onMainPhotoSelected} type={"file"} /> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avatar;