import axios from '../utils/axios';

export const getSession = async () => {
    return await axios.get('/auth', {
        headers: {
            Authorization: localStorage.getItem("user")
        }
    });
};