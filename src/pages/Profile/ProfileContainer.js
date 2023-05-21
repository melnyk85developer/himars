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
    console.log(props.profile)

    let refreshProfile = (id) => {
        let userId = id;
        console.log("User ID " + id)

        if(id === ":id"){
            userId = 28829
            if(!userId){
                props.history.push("/authorization")
            }
            console.log("User ID " + userId)

            props.getProfile(userId)
            props.getStatus(userId)
        }else{
            props.getProfile(id)
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
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export {routeMain}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);