export type ProfileType = {
    userId: number | null | string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
    // newPostText: string
}
export type PostType = {
    id: string
    post: string
    like: string
    dislike: string
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
export type UserType = {
    id: number | null
    name: string
    surname: string
    status: string
    photos: PhotosType
    followed: boolean
}