import React, { useState } from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, ProfileType } from "../../../types/types";
import "./styles.scss";

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
}

const Info: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData: ProfileType) => {
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

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                })}
            </div>
        </>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <h6>{contactTitle}:</h6>
                {contactValue}
        </div>
    )
}
export default Info;