import { instance, GetItemsType, APIResponseType } from "./api";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
        )
    },
    async follow(id: number){
        const res = await instance.post<APIResponseType>(`follow/${id}`);
        return res.data;
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`)
            .then(res => res.data) as Promise<ResponseType>
    }
}