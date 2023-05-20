import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "store/profileReducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import Profile from ".";
import routeMain  from './routes';

const ProfileContainer = React.memo(props => {

    let userId = props.userId;

    if(!userId){
        userId = 28829
        // props.authorizedUserId;
        if(!userId){
            props.history.push("/authorization")
        }
    }
    console.log("User ID " + props.authorizedUserId)

    useEffect(() => {
        props.getProfile(userId)
        props.getStatus(userId)
    }, [])

    // props.getProfile(userId)
    
    return <Profile status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
})
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export {routeMain}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);