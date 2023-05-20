import React from "react";
import ProfileStatus from "./ProfileStatus";
import "./styles.scss";

const Info = (props) => {

    return (
        <div className="description">
            <h3>Подробная информация</h3>
            <div className="name"><h6>Name :
                </h6><p>{props.profile.fullName}</p></div>
            <div className="surname"><h6>Surname :
                </h6><p>{props.profile.surname}</p></div>
            <div className="age"><h6>Age :
                </h6><p>{props.profile.age}</p></div>
            <div className="age"><h6>AboutMe :
                </h6><p>{props.profile.aboutMe}</p></div>
            <div className="age"><h6>facebook :
                </h6><p>{props.profile.contacts.facebook}</p></div>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            {/* <div className="country"><h6>Country :
                </h6><p>{props.profile.location.country}</p></div>
            <div className="sity"><h6>Sity :
                </h6><p>{props.profile.location.city}</p></div>
            <div className="familyStatus"><h6>FamilyStatus :
                </h6><p>{props.profile.familyStatus}</p></div> */}
        </div>
    )
}

export default Info;