import { FilterType } from "../store/usersReducer"

export type ProfileType = {
    userId: string | undefined | number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
export type UserType = {
    id: number | null | string | undefined
    name: string
    surname: string
    status: string
    photos: PhotosType
    followed: boolean
    filter: FilterType
}
export type PostType = {
    id: string
    post: string
    like: string
    dislike: string
    likeCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | undefined | null | number
    large: string | undefined | null | number
}
