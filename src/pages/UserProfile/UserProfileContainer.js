import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile, getStatus, updateStatus } from "store/userProfileReducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import UserProfile from ".";
import routeMain  from './routes';

const UserProfileContainer = (props) => {
    const {id} = useParams();
    props.getUserProfile(id)
    props.getStatus(props.id)
    return <UserProfile {...props} status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
}
let mapStateToProps = (state) => ({
    profile: state.userProfilePage.profile,
    status: state.profilePage.status
})
export {routeMain}
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect
)(UserProfileContainer);