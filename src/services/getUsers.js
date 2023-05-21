import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // baseURL: 'https://63bb6f93cf99234bfa5b1191.mockapi.io/users/',
    headers: {
        "API-KEY": "d84c187e-a024-40d1-aa18-965665532015"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
        )
    },
    follow(id){
        return instance.post(`follow/${id}`
    )},
    unfollow(id){
        return instance.delete(`follow/${id}`
    )}
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    }
}
export const friendsAPI = {
    getFriends() {
        const options = {
            method: 'GET',
            url: 'https://63bb6f93cf99234bfa5b1191.mockapi.io/users'
        }
        return axios.request(options);
    }
} 
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}