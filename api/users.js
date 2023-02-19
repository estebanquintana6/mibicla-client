import axios from "@utils/axios";

export const getUsers = async () => {
    return await axios.get('/users', {
        headers: {
            Authorization: localStorage.getItem("user")
        }
    });
}

export const newAdmin = async (email) => {
    return await axios.post('/users/send_register_invitation', {
        headers: {
            Authorization: localStorage.getItem("user")
        },
        email
    });
}