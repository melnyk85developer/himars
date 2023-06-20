import React, { useEffect } from "react";
import Profile from "./index";
import { routeMain as routeLogin } from "../Login/Login";
import routeMain  from './routes';
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { 
    getProfile, 
    getStatus, 
    updateStatus, 
    savePhoto,
    saveProfile } from "../../store/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../store/reduxStore";
import { ProfileType } from '../../types/types';

type MapPropsType = ReturnType<typeof mapStateToProps>

export type DispatchPropsType = {
    getProfile: (userId: number | null | string | undefined) => void
    getStatus: (userId: number | null) => void
}
export type PropsProfileType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    savePhoto: (file: File) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
export type PropsType = MapPropsType & DispatchPropsType & PropsProfileType

const ProfileContainer: React.FC<PropsType> = (props) => {
    const {id} = useParams<Record<string, string | undefined>>();
    const userId = id;

    const refreshProfile = (userId: string | undefined | number | null) => {
        if(userId === undefined){
            userId = props.authorizedUserId
            if(userId === undefined){
                <Navigate to={routeLogin()} />
            }
            props.getProfile(userId)
            props.getStatus(userId)

        }else{
            props.getProfile(userId as number)
            props.getStatus(userId as number)
        }
    }

    useEffect(() => {
        refreshProfile(userId);
    }, [userId])
    
    return <Profile 
                isOwner={userId === undefined ? true : false} 
                savePhoto={props.savePhoto}  
                status={props.status} 
                updateStatus={props.updateStatus} 
                profile={props.profile}
                saveProfile={props.saveProfile}
            />
}
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
export {routeMain}
export default compose<React.FC>(
    connect(mapStateToProps, {
        getProfile, 
        getStatus, 
        updateStatus, 
        savePhoto,
        saveProfile}),
        withAuthRedirect
)(ProfileContainer);