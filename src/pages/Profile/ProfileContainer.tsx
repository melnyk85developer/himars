import React, { useEffect } from "react";
import Profile from "./index";
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

type DispatchPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean

    getProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
export type PropsProfileType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export type PropsType = MapPropsType & 
                DispatchPropsType & 
                PropsProfileType

const ProfileContainer: React.FC<PropsType> = (props) => {
    const {id} = useParams<Record<string, string | undefined>>();
    const userId: number = Number(id);

    console.log(props.profile)

    const refreshProfile = (userId: number | null | string) => {
        if(userId === "id"){
            userId = props.authorizedUserId
            if(!userId){
                <Navigate to={"/authorization"} />
            }
            props.getProfile(userId)
            props.getStatus(userId)

            console.log(userId)

        }else{
            props.getProfile(userId as number)
            props.getStatus(userId as number)
        }
    }
    useEffect(() => {
        refreshProfile(userId);
    }, [userId])
    
    return <Profile 
                isOwner={userId === null ? true : false} 
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile, 
        getStatus, 
        updateStatus, 
        savePhoto,
        saveProfile}),
        withAuthRedirect
)(ProfileContainer);