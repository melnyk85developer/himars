import axios from "axios";

const getFriends = () => {
    const options = {
        method: 'GET',
        url: 'https://63bb6f93cf99234bfa5b1191.mockapi.io/users'
    }
    return axios.request(options);
}
export default getFriends;