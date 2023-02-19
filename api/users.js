import axios from "@utils/axios";

export const getUsers = async () => {
    return await axios.get('/users', {
        headers: {
            Authorization: localStorage.getItem("user")
        }
    });
}