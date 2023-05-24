import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { 
    getProfile, 
    getStatus, 
    updateStatus, 
    savePhoto,
    saveProfile } from "store/profileReducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import Profile from ".";
import routeMain  from './routes';

const ProfileContainer = (props) => {
    const {id} = useParams();
    let userId = id;

    const refreshProfile = (userId) => {
        if(id === ":id"){
            if(!id === ":id"){
                props.history.push("/authorization")
            }
            userId = props.authorizedUserId
            props.getProfile(userId)
            props.getStatus(userId)
        }else{
            props.getProfile(userId)
            props.getStatus(userId)
        }
    }
    useEffect(() => {
        refreshProfile(userId)
    }, [userId])
    
    return <Profile 
                isOwner={userId === ":id" ? true : false} 
                savePhoto={props.savePhoto}  
                status={props.status} 
                updateStatus={props.updateStatus} 
                profile={props.profile}
                saveProfile={props.saveProfile}
            />
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
export {routeMain}
export default compose(
    connect(mapStateToProps, {
        getProfile, 
        getStatus, 
        updateStatus, 
        savePhoto,
        saveProfile}),
    withAuthRedirect
)(ProfileContainer);