import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import "./styles.scss";

const Info = (props) => {
    return (
        <div className="description">
            <h3>Подробная информация</h3>
            <div className="name">
                <h6>Name :</h6>
                <p>{props.profile.fullName}</p>
            </div>
            <div className="aboutMe">
                <h6>AboutMe :</h6>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div className="contacts">
                <h6>Contacts :</h6>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.instagram}</p>
                <p>{props.profile.contacts.mainLink}</p>
                <p>{props.profile.contacts.twitter}</p>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.contacts.website}</p>
                <p>{props.profile.contacts.youtube}</p>
            </div>
            <div className="lookingForAJob">
                <h6>Looking For A Job :</h6>
                <p>{props.profile.lookingForAJob}</p>
            </div>
            <div className="lookingForAJobDescription">
                <h6>Looking For A Job Description :</h6>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            {/* <div className="name"><h6>Name :</h6><p>{props.profile.name}</p></div>
            <div className="surname"><h6>Surname :</h6><p>{props.profile.surname}</p></div>
            <div className="age"><h6>Age :</h6><p>{props.profile.age}</p></div>
            <div className="country"><h6>Country :</h6><p>{props.profile.country}</p></div>
            <div className="sity"><h6>Sity :</h6><p>{props.profile.sity}</p></div>
            <div className="familyStatus"><h6>FamilyStatus :</h6><p>{props.profile.familyStatus}</p></div> */}
        </div>
    )
}

export default Info;