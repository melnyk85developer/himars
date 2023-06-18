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
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    surname: string
    status: string
    photos: PhotosType
    followed: boolean
}