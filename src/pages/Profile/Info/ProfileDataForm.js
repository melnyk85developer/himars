import React from "react";
import { reduxForm } from "redux-form";
import { createFild, Input, Textarea } from 'components/FormsControls/FormsControls';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            { error && <div className={"formSummaryError"}>{error}</div>}
            <div className="name">
                <h6>Name : {createFild("Full name", "fullName", [], Input)}</h6>
            </div>
            <div className="aboutMe">
                <h6>About Me : { createFild("About Me", "aboutMe", [], Textarea) }</h6>
            </div>
            <div className="lookingForAJob">
                <h6>Looking For A Job : { createFild("", "lookingForAJob", [], Input, {type: "checkbox"}) }</h6>
            </div>
            <div className="lookingForAJobDescription">
                <h6>My professional skils : { createFild("My professional skils", "lookingForAJobDescription", [], Textarea) }</h6>
            </div>
            <div className="contacts">
                <h6>Contacts :</h6>
                {Object.keys(profile.contacts).map(key => {
                    return(
                        <div key={key}>
                            {key}: {createFild(key, "contacts." + key, [], Input)}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;