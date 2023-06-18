import { instance, GetItemsType } from "./api";

export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 10){
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
        )
    }
}