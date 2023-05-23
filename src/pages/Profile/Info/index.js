import React, { useState } from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import "./styles.scss";

const Info = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div className="description">
            <h3>Подробная информация</h3>
            { editMode 
                ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
                : <ProfileData goToEditMode={()=>{setEditMode(true)}} isOwner={props.isOwner} profile={props.profile}/>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            <div className="name">
                <h6>Name :</h6>
                <p>{profile.fullName}</p>
                { isOwner && <div><button onClick={goToEditMode} >Редактировать профиль</button></div> }
            </div>
            <div className="aboutMe">
                <h6>AboutMe :</h6>
                <p>{profile.aboutMe}</p>
            </div>
            <div className="lookingForAJob">
                <h6>Looking For A Job :</h6>
                <p>{profile.lookingForAJob ? "yes" : "От работы кони дохнут"}</p>
            </div>
            <div className="lookingForAJobDescription">
                <h6>My professional skils :</h6>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
            
            <div className="contacts">
                <h6>Contacts :</h6>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </>
    )
}
export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <h6>{contactTitle}:</h6>
                {contactValue}
        </div>
    )
}
export default Info;