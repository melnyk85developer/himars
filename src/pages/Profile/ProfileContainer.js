import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile, getStatus, updateStatus } from "store/profileReducer";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import Profile from ".";
import routeMain  from './routes';

const ProfileContainer = (props) => {
    const {id} = useParams();

    let refreshProfile = (id) => {
        let userId = id;

        if(id === ":id"){
            userId = props.authorizedUserId

            if(!userId){
                props.history.push("/authorization")
            }
            props.getProfile(userId)
            props.getStatus(userId)
        }else{
            props.getProfile(userId)
            props.getStatus(userId)
        }
    }
    useEffect(() => {
        refreshProfile(id)
    }, [id])
    // const isowner = (userId) => {
    //     if(!userId){
    //         return undefined
    //     }
    // }
    // isowner={isowner(userId)} 
    return <Profile status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
export {routeMain}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);